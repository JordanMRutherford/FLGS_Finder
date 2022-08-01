import stores from '../modules/storesJSON.geojson' assert {type: 'json'};

const booleanTrue = 
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#064e3b" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>`

const booleanFalse =
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#c62828" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg>`

// ---- MAP ---- //

mapboxgl.accessToken = 'pk.eyJ1IjoianJ1ZnUiLCJhIjoiY2wyNHl6bnhzMGsweTNpbXgzZWZta2JkZSJ9.VAagCgqtyE8OyCbdRj6ocQ';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10', 
  center: [-79.55, 43.45],
  zoom: 8
});

map.on('load', () => {

// ---- FUNCTIONS ---- //

function userBbox(sortedStores, storeIdentifier, userLocation) {

  const lats = [
    sortedStores.features[storeIdentifier].geometry.coordinates[1],
    userLocation[1]
  ];

  const lons = [
    sortedStores.features[storeIdentifier].geometry.coordinates[0],
    userLocation[0]
  ];

  const sortedLons = lons.sort((a, b) => {
    if (a > b) { return 1 };
    if (a.distance < b.distance) { return -1 };
    return 0;
  });

  const sortedLats = lats.sort((a, b) => {
    if (a > b) { return 1 };
    if (a.distance < b.distance) { return -1 };
    return 0;
  });
  
  return [
    [sortedLons[0], sortedLats[0]],
    [sortedLons[1], sortedLats[1]]
  ];
}

function searchBbox(sortedStores, storeIdentifier, searchResult) {

  const lats = [
    sortedStores.features[storeIdentifier].geometry.coordinates[1],
    searchResult.coordinates[1]
  ];

  const lons = [
    sortedStores.features[storeIdentifier].geometry.coordinates[0],
    searchResult.coordinates[0]
  ];

  const sortedLons = lons.sort((a, b) => {
    if (a > b) { return 1 };
    if (a.distance < b.distance) { return -1 };
    return 0;
  });

  const sortedLats = lats.sort((a, b) => {
    if (a > b) { return 1 };
    if (a.distance < b.distance) { return -1 };
    return 0;
  });

  return [
    [sortedLons[0], sortedLats[0]],
    [sortedLons[1], sortedLats[1]]
  ];
}

//------ ADD SOURCE ------//

  map.addSource('stores', {
    type: 'geojson',
    data: stores, 
    cluster: true,
    clusterMaxZoom: 8, 
    clusterRadius: 65,    
  });


//------ GEOCODER/SEARCH BAR ------ //

  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    marker: true,
    marker: {
      color:'#047857',
      scale: 1.5},
    bbox: [-140.99778, 41.6751050889, -52.6480987209, 83.23324]
  });

  map.addControl(geocoder, 'top-right');

  geocoder.on('result', (event) => {
    const searchResult = event.result.geometry;
    const options = { units: 'kilometers' };
    
    for (const store of stores.features) {

      store.properties.distance = turf.distance(
        searchResult,
        store.geometry.coordinates,
        options
      );      
    }


  stores.features.sort((a, b) => {
      if (a.properties.distance > b.properties.distance) {
        return 1;
      }
      if (a.properties.distance < b.properties.distance) {
        return -1;
      }
      return 0; 
  });

  const listings = document.getElementById('listings');    

  while (listings.firstChild) {
    listings.removeChild(listings.firstChild);
  }


  buildLocationList(stores);  

  const activeListing = document.getElementById(
    `listing-${stores.features[0].properties.id}`
  );
  activeListing.classList.add('active');

  const bbox = searchBbox(stores, 0, searchResult);
  map.fitBounds(bbox, {
    padding: 100
  });

  createPopUp(stores.features[0]);
  
  });

// ------CENTER ON USER------ //

  const geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: false
  });

    map.addControl(geolocate);

  geolocate.on('geolocate', function(e) {

    const lon = e.coords.longitude;
    const lat = e.coords.latitude

    const userLocation = [lon, lat];
    const options = { units: 'kilometers' };

    for (const store of stores.features) {
      store.properties.distance = turf.distance(
        userLocation,
        store.geometry.coordinates,
        options
      );      
    }

    stores.features.sort((a, b) => {
      if (a.properties.distance > b.properties.distance) {
        return 1;
      }
      if (a.properties.distance < b.properties.distance) {
        return -1;
      }
      return 0; 
    });

    const listings = document.getElementById('listings');
    while (listings.firstChild) {
      listings.removeChild(listings.firstChild);
    }
    
    buildLocationList(stores);

    const activeListing = document.getElementById(
      `listing-${stores.features[0].properties.id}`
    );
    activeListing.classList.add('active');

    const bbox = userBbox(stores, 0, userLocation);

    map.fitBounds(bbox, {
      padding: 100
    });

    createPopUp(stores.features[0]);
  });


// ------MAP LAYERS------//

  map.addLayer({
    id: 'unclustered-point',
    type: 'circle',
    source: 'stores',
    filter: ['!', ['has', 'point_count']],
    paint: {
      'circle-color': '#047857',
      'circle-radius': 4,
      'circle-stroke-width': 1,
      'circle-stroke-color': '#fff'
    }
  });

  map.addLayer({
    id: 'clusters',
    type: 'circle',
    source: 'stores',
    filter: ['has', 'point_count'],
    paint: {
      'circle-color': [
        'step',
        ['get', 'point_count'],
        '#059669',

        10,
        '#047857',

        25,
        '#065f46',

      ],

      'circle-radius': [
        'step',
        ['get', 'point_count'],
        20,

        10,30,

        25,40,

      ]
    }
  });

  map.addLayer({
    id: 'cluster-count',
    type: 'symbol',
    source: 'stores',
    filter: ['has', 'point_count'],
    layout: {
    'text-field': '{point_count_abbreviated}',
    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    'text-size': 16
    },
    paint: {
      'text-color': '#ffffff'
    }
  });

  map.on('click', 'clusters', (event) => {
    const features = map.queryRenderedFeatures(event.point, {
      layers: ['clusters']
    });
    
    const clusterId = features[0].properties.cluster_id;
    map.getSource('stores').getClusterExpansionZoom(
      clusterId, (err, zoom) => {
        if (err) return;
      
        map.easeTo({
          center: features[0].geometry.coordinates,
          zoom: zoom
        });
      } 
    );
  });

  map.on('click', (event) => {

    const features = map.queryRenderedFeatures(event.point, {
      layers: ['unclustered-point']
    });

    if (!features.length) return;

    const clickedPoint = features[0];
  
    flyToStore(clickedPoint);
    createPopUp(clickedPoint);
  
    const activeItem = document.getElementsByClassName('active');
    if (activeItem[0]) {
      activeItem[0].classList.remove('active');
    }
    const listing = document.getElementById(
      `listing-${clickedPoint.properties.id}`
    );
    try {
      listing.classList.add('active');
    }
    catch {}
  });
  

    function buildLocationList(stores) {

      let limit = 8;

      for (const store of stores.features.slice(0, limit)) {

        const listings = document.getElementById('listings');
        
        const listing = listings.appendChild(document.createElement('div'));
        listing.id = `listing-${store.properties.id}`;
        listing.className = 'item';
      

        const link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link.id = `link-${store.properties.id}`;
        link.innerHTML = `${store.properties.name}`;
      
        const details = listing.appendChild(document.createElement('div'));

        details.innerHTML = `
        ${store.properties.streetAddress} - ${store.properties.city}, ${store.properties.province}
        `;

        if (store.properties.distance) {
          const roundedDistance = Math.round(store.properties.distance * 100) / 100;
          details.innerHTML += `<div><strong>${roundedDistance} km away</strong></div>`;
        }

        link.addEventListener('click', function () {
        for (const feature of stores.features) {
          if (this.id === `link-${feature.properties.id}`) {
            flyToStore(feature);
            createPopUp(feature);
          }
        }

        const activeItem = document.getElementsByClassName('active');

        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }

        this.parentNode.classList.add('active');
        });

    }
    }

    function flyToStore(currentFeature) {
      map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 12
      });
    }
  

    function createPopUp(currentFeature) {

      const storeName = currentFeature.properties.name;
      const storeImage = currentFeature.properties.imageAddress;
      const storePhone = currentFeature.properties.phoneNumber;
      const storeStreet = currentFeature.properties.streetAddress;
      const storeAddress = currentFeature.properties.city + ', ' + currentFeature.properties.province;

      const domesticGames = currentFeature.properties.domesticGames === true ? `${booleanTrue}` : `${booleanFalse}`;
      const importGames = currentFeature.properties.importGames === true ? `${booleanTrue}` : `${booleanFalse}`;
      const miniatureGames = currentFeature.properties.miniatureGames === true ? `${booleanTrue}` : `${booleanFalse}`;
      const cardGames = currentFeature.properties.cardGames === true ? `${booleanTrue}` : `${booleanFalse}`;
      const roleplayingGames = currentFeature.properties.roleplayingGames === true ? `${booleanTrue}` : `${booleanFalse}`;

      const popUps = document.getElementsByClassName('mapboxgl-popup');
        if (popUps[0]) popUps[0].remove();

      const popup = new mapboxgl.Popup()

      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML( 
        `
        <div class="popup">
        
          <div class="popup_storePic"> 
            <img src=${storeImage}>
          </div>
          
          <div class="popup_storeDetails">
            <p>${storeName}</p>
            <p>${storePhone}</p>
            <p>${storeStreet}</p>
            <p>${storeAddress}</p>
          </div>

          <div class="popup_storeDetails_rule">
            <hr>
          </div>

          <div class="popup_storeSpecialties">
              <p>Domestic Games: </p>
              <p>Import Games:</p>
              <p>Miniature Games:</p>
              <p>Card Games:</p>
              <p>Roleplaying Games:</p>
          </div>
        
          <div class="popup_storeSpecialties_boolean">
              <p>${domesticGames}</p>
              <p>${importGames}</p>
              <p>${miniatureGames}</p>
              <p>${cardGames}</p>
              <p>${roleplayingGames}</p>
          </div>
          
        </div>
      `)
      .addTo(map);
    }
});
