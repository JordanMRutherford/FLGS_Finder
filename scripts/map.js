
// import stores from '../modules/storesJSON.geojson' assert {type: 'json'};

const stores = 
{
  "type": "FeatureCollection",
  "crs": { "type": "name", "properties": { "name": "Stores-JSON" } },
  "features": [
    {"type":"Feature","geometry":{"type":"point","coordinates":[-123.127228,49.251163]},"properties":{"id": 38,"name":"Wildwood Games","streetAddress":"3880 Oak St","city":"Vancouver","province":"British Columbia","phoneNumber":"(604) 555-0138","imageAddress":"../static/img/stores/store38.jpg","domesticGames":true,"importGames":true,"miniatureGames":true,"cardGames":false,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-79.648762,44.364561]},"properties":{"id": 46,"name":"Good Move Games","streetAddress":"52 Bruce Crescent","city":"Barrie","province":"Ontario","phoneNumber":"(705) 555-0146","imageAddress":"../static/img/stores/store46.jpg","domesticGames":true,"importGames":true,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-63.572751,44.635341]},"properties":{"id": 42,"name":"HFX Cards & Games","streetAddress":"5487 Inglis St","city":"Halifax","province":"Nova Scotia","phoneNumber":"(902) 555-0142","imageAddress":"../static/img/stores/store42.jpg","domesticGames":true,"importGames":true,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-73.623247,45.529727]},"properties":{"id": 21,"name":"Jeux & Jouets","streetAddress":"7222 Rue Hutchison","city":"Montreal","province":"Quebec","phoneNumber":"(514) 555-0121","imageAddress":"../static/img/stores/store21.jpg","domesticGames":true,"importGames":true,"miniatureGames":false,"cardGames":false,"roleplayingGames":false}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-79.323155,43.683269]},"properties":{"id": 22,"name":"Hellas Games","streetAddress":"1577 Danforth Ave","city":"Toronto","province":"Ontario","phoneNumber":"(416) 555-0122","imageAddress":"../static/img/stores/store22.jpg","domesticGames":true,"importGames":true,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-80.994319,46.491529]},"properties":{"id": 18,"name":"The Larch & Quill","streetAddress":"52 Larch St","city":"Sudbury","province":"Ontario","phoneNumber":"(705) 555-0118","imageAddress":"../static/img/stores/store18.jpg","domesticGames":true,"importGames":false,"miniatureGames":false,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-104.581742,50.450687]},"properties":{"id": 2,"name":"Rhymes with Fun Games","streetAddress":"1751 Mcara St","city":"Regina","province":"Saskatchewan","phoneNumber":"(474) 555-0102","imageAddress":"../static/img/stores/store2.jpg","domesticGames":true,"importGames":false,"miniatureGames":false,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-79.842605,43.201747]},"properties":{"id": 16,"name":"Hogtown Hijinx","streetAddress":"399 Queen Victoria Dr","city":"Hamilton","province":"Ontario","phoneNumber":"(905) 555-0116","imageAddress":"../static/img/stores/store16.jpg","domesticGames":true,"importGames":false,"miniatureGames":true,"cardGames":false,"roleplayingGames":false}}, 
    {"type":"Feature","geometry":{"type":"point","coordinates":[-52.749059,47.559959]},"properties":{"id": 43,"name":"New Found Games","streetAddress":"25 Kenmount Rd","city":"St. John's","province":"Newfoundland","phoneNumber":"(709) 555-0143","imageAddress":"../static/img/stores/store43.jpg","domesticGames":true,"importGames":false,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-79.521815,43.834274]},"properties":{"id": 47,"name":"Rutherford Road Games","streetAddress":"2650 Rutherford Rd","city":"Concord","province":"Ontario","phoneNumber":"(905) 555-0147","imageAddress":"../static/img/stores/store47.jpg","domesticGames":true,"importGames":true,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-71.863733,45.408678]},"properties":{"id": 49,"name":"Boutique Imaginaire","streetAddress":"1135 Rue King E","city":"Sherbrooke","province":"Quebec","phoneNumber":"(819) 555-0149","imageAddress":"../static/img/stores/store49.jpg","domesticGames":true,"importGames":false,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-79.249916,43.157585]},"properties":{"id": 1,"name":"The War College","streetAddress":"47 Williams St","city":"St. Catharines","province":"Ontario","phoneNumber":"(905) 555-0101","imageAddress":"../static/img/stores/store1.jpg","domesticGames":true,"importGames":false,"miniatureGames":true,"cardGames":false,"roleplayingGames":false}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-79.072848,43.101578]},"properties":{"id": 7,"name":"Armoury Games","streetAddress":"4775 Armoury St","city":"Niagara Falls","province":"Ontario","phoneNumber":"(905) 555-0107","imageAddress":"../static/img/stores/store7.jpg","domesticGames":true,"importGames":false,"miniatureGames":false,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-113.496832,53.498606]},"properties":{"id": 11,"name":"Board Game Junction","streetAddress":"6107 104 St NW","city":"Edmonton","province":"Alberta","phoneNumber":"(780) 555-0111","imageAddress":"../static/img/stores/store11.jpg","domesticGames":true,"importGames":false,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-123.098351,49.280418]},"properties":{"id": 15,"name":"Chits and Giggles","streetAddress":"223 E. Pender St.","city":"Vancouver","province":"British Columbia","phoneNumber":"(604) 555-0115","imageAddress":"../static/img/stores/store15.jpg","domesticGames":true,"importGames":true,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-66.056996,45.276205]},"properties":{"id": 41,"name":"Poseidon Games","streetAddress":"42 Waterloo St","city":"Saint John","province":"New Brunswick","phoneNumber":"(506) 555-0141","imageAddress":"../static/img/stores/store41.jpg","domesticGames":true,"importGames":true,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-79.594447,43.597112]},"properties":{"id": 0,"name":"War Games Academy","streetAddress":"888 Dundas St E. Unit E1","city":"Mississauga","province":"Ontario","phoneNumber":"(905) 555-0100","imageAddress":"../static/img/stores/store0.jpg","domesticGames":true,"importGames":false,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}},    
    {"type":"Feature","geometry":{"type":"point","coordinates":[-73.578070,45.503334]},"properties":{"id": 33,"name":"Magic University Games","streetAddress":"3480 McTavish St","city":"Montreal","province":"Quebec","phoneNumber":"(514) 555-0133","imageAddress":"../static/img/stores/store33.jpg","domesticGames":true,"importGames":false,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}},  
    {"type":"Feature","geometry":{"type":"point","coordinates":[-75.724687,45.269498]},"properties":{"id": 19,"name":"The Robot's Cellar","streetAddress":"702 Beatrice Dr","city":"Nepean","province":"Ontario","phoneNumber":"(613) 555-0119","imageAddress":"../static/img/stores/store19.jpg","domesticGames":true,"importGames":true,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-79.430641,43.642849]},"properties":{"id": 28,"name":"Noble Games","streetAddress":"24 Noble St Unit 111","city":"Toronto","province":"Ontario","phoneNumber":"(416) 555-0128","imageAddress":"../static/img/stores/store28.jpg","domesticGames":true,"importGames":false,"miniatureGames":true,"cardGames":true,"roleplayingGames":false}},   
    {"type":"Feature","geometry":{"type":"point","coordinates":[-75.724794,45.403426]},"properties":{"id": 13,"name":"Good Move Games","streetAddress":"1076 Wellington St. W","city":"Ottawa","province":"Ontario","phoneNumber":"(753) 555-0113","imageAddress":"../static/img/stores/store13.jpg","domesticGames":true,"importGames":true,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-79.767372,43.377319]},"properties":{"id": 26,"name":"We the Meeple","streetAddress":"850 Appleby Line","city":"Burlington","province":"Ontario","phoneNumber":"(905) 555-0126","imageAddress":"../static/img/stores/store26.jpg","domesticGames":true,"importGames":false,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-78.865127,43.899998]},"properties":{"id": 48,"name":"The Game Box","streetAddress":"3 William St W","city":"Oshawa","province":"Ontario","phoneNumber":"(289) 555-0148","imageAddress":"../static/img/stores/store48.jpg","domesticGames":true,"importGames":false,"miniatureGames":false,"cardGames":true,"roleplayingGames":true}},   
    {"type":"Feature","geometry":{"type":"point","coordinates":[-106.664812,52.157586]},"properties":{"id": 34,"name":"The Wolf Den","streetAddress":"405 Circle Dr","city":"Saskatoon","province":"Saskatchewan","phoneNumber":"(306) 555-0134","imageAddress":"../static/img/stores/store34.jpg","domesticGames":true,"importGames":false,"miniatureGames":false,"cardGames":true,"roleplayingGames":false}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-76.481561,44.232198]},"properties":{"id": 10,"name":"Big House Games","streetAddress":"51 Queen St","city":"Kingston","province":"Ontario","phoneNumber":"(613) 555-0110","imageAddress":"../static/img/stores/store10.jpg","domesticGames":true,"importGames":false,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-123.356411,48.414196]},"properties":{"id": 23,"name":"Beacon Hill Games","streetAddress":"301 Cook St","city":"Victoria","province":"British Columbia","phoneNumber":"(250) 555-0123","imageAddress":"../static/img/stores/store23.jpg","domesticGames":true,"importGames":true,"miniatureGames":false,"cardGames":true,"roleplayingGames":false}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-97.133425,49.864745]},"properties":{"id": 14,"name":"Victory Point","streetAddress":"568 Osborne St","city":"Winnipeg","province":"Manitoba","phoneNumber":"(204) 555-0114","imageAddress":"../static/img/stores/store14.jpg","domesticGames":true,"importGames":false,"miniatureGames":false,"cardGames":true,"roleplayingGames":false}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-73.736081,45.567421]},"properties":{"id": 37,"name":"Guilde des Voleurs","streetAddress":"1804 Blvd. le Corbusier","city":"Laval","province":"Quebec","phoneNumber":"(450) 555-0137","imageAddress":"../static/img/stores/store37.jpg","domesticGames":true,"importGames":false,"miniatureGames":true,"cardGames":false,"roleplayingGames":false}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-80.493509,43.451608]},"properties":{"id": 29,"name":"Bell Tolls Games","streetAddress":"250 King St W","city":"Kitchener","province":"Ontario","phoneNumber":"(519) 555-0129","imageAddress":"../static/img/stores/store29.jpg","domesticGames":true,"importGames":false,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}}, 
    {"type":"Feature","geometry":{"type":"point","coordinates":[-79.41801,43.68302]},"properties":{"id": 25,"name":"6ix-Sided Games","streetAddress":"501 St Clair Ave W","city":"Toronto","province":"Ontario","phoneNumber":"(416) 555-0125","imageAddress":"../static/img/stores/store25.jpg","domesticGames":true,"importGames":false,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-79.83894,43.23883]},"properties":{"id": 6,"name":"Miniature Worlds","streetAddress":"8 E 36th St","city":"Hamilton","province":"Ontario","phoneNumber":"(905) 555-0106","imageAddress":"../static/img/stores/store6.jpg","domesticGames":true,"importGames":false,"miniatureGames":true,"cardGames":false,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-84.326397,46.507369]},"properties":{"id": 39,"name":"Quiet Nook Games","streetAddress":"756 Queen St E","city":"Sault Ste. Marie","province":"Ontario","phoneNumber":"(705) 555-0139","imageAddress":"../static/img/stores/store39.jpg","domesticGames":true,"importGames":false,"miniatureGames":false,"cardGames":true,"roleplayingGames":false}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-97.263041,49.875533]},"properties":{"id": 4,"name":"The Board and Peg","streetAddress":"500 Moray St","city":"Winnipeg","province":"Manitoba","phoneNumber":"(204) 555-0104","imageAddress":"../static/img/stores/store4.jpg","domesticGames":true,"importGames":false,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-75.706314,45.404577]},"properties":{"id": 24,"name":"Parliament Hobby & Toy","streetAddress":"234 Lebreton St N","city":"Ottawa","province":"Ontario","phoneNumber":"(753) 555-0124","imageAddress":"../static/img/stores/store24.jpg","domesticGames":true,"importGames":true,"miniatureGames":false,"cardGames":false,"roleplayingGames":false}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-123.107404,49.280383]},"properties":{"id": 9,"name":"So Fun City","streetAddress":"526 Abbott St","city":"Vancouver","province":"British Columbia","phoneNumber":"(604) 555-0109","imageAddress":"../static/img/stores/store9.jpg","domesticGames":true,"importGames":true,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-81.213545,42.996491]},"properties":{"id": 44,"name":"Gateway Game Shop","streetAddress":"471 Nightingale Ave","city":"London","province":"Ontario","phoneNumber":"(519) 555-0144","imageAddress":"../static/img/stores/store44.jpg","domesticGames":true,"importGames":false,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-66.650403,45.955791]},"properties":{"id": 40,"name":"Rabbitton Games","streetAddress":"364 Victoria St","city":"Fredericton","province":"New Brunswick","phoneNumber":"(506) 555-0140","imageAddress":"../static/img/stores/store40.jpg","domesticGames":true,"importGames":false,"miniatureGames":false,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-79.798584,43.322783]},"properties":{"id": 31,"name":"Man the Games","streetAddress":"1407 Lakeshore Rd","city":"Burlington","province":"Ontario","phoneNumber":"(905) 555-0131","imageAddress":"../static/img/stores/store31.jpg","domesticGames":true,"importGames":false,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-79.378219,43.659931]},"properties":{"id": 20,"name":"Top Dex Card Shop","streetAddress":"55 Gerrard St E","city":"Toronto","province":"Ontario","phoneNumber":"(416) 555-0120","imageAddress":"../static/img/stores/store20.jpg","domesticGames":true,"importGames":false,"miniatureGames":false,"cardGames":true,"roleplayingGames":false}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-122.975596,49.249551]},"properties":{"id": 5,"name":"GiGi's Game Shop","streetAddress":"3905 Norland Ave","city":"Burnaby","province":"British Columbia","phoneNumber":"(604) 555-0105","imageAddress":"../static/img/stores/store5.jpg","domesticGames":true,"importGames":false,"miniatureGames":false,"cardGames":true,"roleplayingGames":false}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-75.677623,45.490911]},"properties":{"id": 12,"name":"Rouler+Bouger","streetAddress":"655 Bd Saint-René O","city":"Gatineau","province":"Quebec","phoneNumber":"(819) 555-0112","imageAddress":"../static/img/stores/store12.jpg","domesticGames":true,"importGames":true,"miniatureGames":false,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-80.264087,43.145033]},"properties":{"id": 30,"name":"Brant Games","streetAddress":"187 Market St","city":"Brantford","province":"Ontario","phoneNumber":"(519) 555-0130","imageAddress":"../static/img/stores/store30.jpg","domesticGames":true,"importGames":true,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-80.232651,43.521155]},"properties":{"id": 27,"name":"Academic Games & Toys","streetAddress":"502 Edinburgh Rd S","city":"Guelph","province":"Ontario","phoneNumber":"(519) 555-0127","imageAddress":"../static/img/stores/store27.jpg","domesticGames":true,"importGames":false,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-113.477455,53.512612]},"properties":{"id": 17,"name":"Dice Guys","streetAddress":"9618 76 Ave NW","city":"Edmonton","province":"Alberta","phoneNumber":"(780) 555-0117","imageAddress":"../static/img/stores/store17.jpg","domesticGames":true,"importGames":false,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-114.081083,51.044259]},"properties":{"id": 3,"name":"Magic Mountain Games","streetAddress":"830 10 Ave SW","city":"Calgary","province":"Alberta","phoneNumber":"(403) 555-0103","imageAddress":"../static/img/stores/store3.jpg","domesticGames":true,"importGames":false,"miniatureGames":false,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-79.86343,43.250011]},"properties":{"id": 8,"name":"Board Game Renaissance","streetAddress":"100 Ferguson Ave S","city":"Hamilton","province":"Ontario","phoneNumber":"(905) 555-0108","imageAddress":"../static/img/stores/store8.jpg","domesticGames":true,"importGames":true,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-83.004302,42.300199]},"properties":{"id": 45,"name":"Many Sisters Toys & Games","streetAddress":"1421 Tecumseh Rd E","city":"Windsor","province":"Ontario","phoneNumber":"(519) 555-0145","imageAddress":"../static/img/stores/store45.jpg","domesticGames":true,"importGames":true,"miniatureGames":false,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-89.936015,48.436324]},"properties":{"id": 36,"name":"Storm Giant Games","streetAddress":"200 Van Norman St","city":"Thunder Bay","province":"Ontario","phoneNumber":"(807) 555-0136","imageAddress":"../static/img/stores/store36.jpg","domesticGames":true,"importGames":false,"miniatureGames":true,"cardGames":false,"roleplayingGames":false}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-113.814881,52.285798]},"properties":{"id": 35,"name":"Highland Games","streetAddress":"6320 Gaetz Ave","city":"Red Deer","province":"Alberta","phoneNumber":"(403) 555-0135","imageAddress":"../static/img/stores/store35.jpg","domesticGames":true,"importGames":false,"miniatureGames":true,"cardGames":true,"roleplayingGames":true}},
    {"type":"Feature","geometry":{"type":"point","coordinates":[-75.656186,45.438113]},"properties":{"id": 32,"name":"Janeville Games","streetAddress":"347 Montréal Rd","city":"Vanier","province":"Ontario","phoneNumber":"(613) 555-0132","imageAddress":"../static/img/stores/store32.jpg","domesticGames":true,"importGames":false,"miniatureGames":true,"cardGames":false,"roleplayingGames":true}} 
  ]
}

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
