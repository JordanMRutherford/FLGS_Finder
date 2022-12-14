import stores from '../modules/stores.js';


const storesDisplay = document.querySelector('.stores_display');

let i;

for (let i = (stores.length - 1); i >= (stores.length - 5); i--) {
  const storeDescription = `
  <div class="home_listing" style="outline: solid 2px #059669; border-radius: 0.25rem; margin-bottom:1rem">
    <img class="home_listing_img" src="${stores[i].properties.imageAddress}" style="height: 100%; float: left;">
    <div class="home_listing_text" style="display: inline-block; vertical-align: middle; line-height: double;"> 
      <div style="font-weight: bold">${stores[i].properties.name}</div> 
      <div>${stores[i].properties.phoneNumber}</div> 
      <div>${stores[i].properties.streetAddress}</div> 
      <div>${stores[i].properties.city}, ${stores[i].properties.province}</div>
    <div>
  </div>
  `;

  storesDisplay.insertAdjacentHTML('beforeend', storeDescription);
}


// https://stackoverflow.com/questions/72504463/parcel-wont-load-images-in-my-javascript-file