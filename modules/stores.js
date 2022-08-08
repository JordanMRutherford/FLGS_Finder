const stores = [
  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-123.127228,49.251163] 
    },  
    properties:{
      id: 38,
      name: "Wildwood Games", 
      streetAddress: "3880 Oak St", 
      city: "Vancouver", 
      province: "British Columbia", 
      phoneNumber: "(604) 555-0138",
      imageAddress: "../img/stores/store38.jpg",
      domesticGames: true,
      importGames: true,
      miniatureGames: true,
      cardGames: false,
      roleplayingGames: true       
    }
  },

  {
    type:"Feature",
    geometry:{
      type:"point",
      coordinates:[-79.648762,44.364561]
    },
    properties:{
      id: 46,
      name:"Good Move Games",
      streetAddress:"52 Bruce Crescent",
      city:"Barrie",
      province:"Ontario",
      phoneNumber:"(705) 555-0146",
      imageAddress:"../img/stores/store46.jpg",
      domesticGames:true,
      importGames:true,
      miniatureGames:true,
      cardGames:true,
      roleplayingGames:true
    }
  },

  {
    type:"Feature",
    geometry:{
      type:"point",
      coordinates:[-63.572751,44.635341]
    },
    properties:{
      id: 42,
      name:"HFX Cards & Games",
      streetAddress:"5487 Inglis St",
      city:"Halifax",
      province:"Nova Scotia",
      phoneNumber:"(902) 555-0142",
      imageAddress:"../img/stores/store42.jpg",
      domesticGames:true,
      importGames:true,
      miniatureGames:true,
      cardGames:true,
      roleplayingGames:true
    }
  },
  
  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-73.623247,45.529727] 
    },   
    properties:{
      id: 21,
      name: "Jeux & Jouets", 
      streetAddress: "7222 Rue Hutchison", 
      city: "Montreal", 
      province: "Quebec", 
      phoneNumber: "(514) 555-0121",
      imageAddress: "../img/stores/store21.jpg",
      domesticGames: true,
      importGames: true,
      miniatureGames: false,
      cardGames: false,
      roleplayingGames: false     
    }
  },

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-79.323155,43.683269] 
    },    
    properties:{
      id: 22,
      name: "Hellas Games", 
      streetAddress: "1577 Danforth Ave", 
      city: "Toronto", 
      province: "Ontario", 
      phoneNumber: "(416) 555-0122",
      imageAddress: "../img/stores/store22.jpg",
      domesticGames: true,
      importGames: true,
      miniatureGames: true,
      cardGames: true,
      roleplayingGames: true    
    }
  },

  {
    type:"Feature",
    geometry:{
      type:"point",
      coordinates: [-80.994319,46.491529]
    },
    properties:{
      id: 18,
      name:"The Larch & Quill",
      streetAddress:"52 Larch St",
      city:"Sudbury",
      province:"Ontario",
      phoneNumber:"(705) 555-0118",
      imageAddress:"../img/stores/store18.jpg",
      domesticGames:true,
      importGames:false,
      miniatureGames:false,
      cardGames:true,
      roleplayingGames:true
    }
  },

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-79.842605,43.201747] 
    },
    properties:{
      id: 16,
      name: "Hogtown Hijinx", 
      streetAddress: "399 Queen Victoria Dr", 
      city: "Hamilton", 
      province: "Ontario", 
      phoneNumber: "(905) 555-0116",
      imageAddress: "../img/stores/store16.jpg",
      domesticGames: true,
      importGames: false,
      miniatureGames: true,
      cardGames: false,
      roleplayingGames: false    
    }
  },

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-104.581742,50.450687] 
    },     
    properties:{
      id: 2,
      name: "Rhymes with Fun Games", 
      streetAddress: "1751 Mcara St", 
      city: "Regina", 
      province: "Saskatchewan", 
      phoneNumber: "(474) 555-0102",
      imageAddress: "../img/stores/store2.jpg",
      domesticGames: true,
      importGames: false,
      miniatureGames: false,
      cardGames: true,
      roleplayingGames: true    
    }
  },

  {
    type:"Feature",
    geometry:{
      type:"point",
      coordinates:[-52.749059,47.559959]
    },
    properties:{
      id: 43,
      name:"New Found Games",
      streetAddress:"25 Kenmount Rd",
      city:"St. John's",
      province:"Newfoundland",
      phoneNumber:"(709) 555-0143",
      imageAddress:"../img/stores/store43.jpg",
      domesticGames:true,
      importGames:false,
      miniatureGames:true,
      cardGames:true,
      roleplayingGames:true
    }
  },

  {
    type:"Feature",
    geometry:{
      type:"point",
      coordinates:[-79.521815,43.834274]
    },
    properties:{
      id: 47,
      name:"Rutherford Road Games",
      streetAddress:"2650 Rutherford Rd",
      city:"Concord",
      province:"Ontario",
      phoneNumber:"(905) 555-0147",
      imageAddress:"../img/stores/store47.jpg",
      domesticGames:true,
      importGames:true,
      miniatureGames:true,
      cardGames:true,
      roleplayingGames:true
    }
  },

  {
    type:"Feature",
    geometry:{
      type:"point",
      coordinates:[-71.863733,45.408678]
    },
      properties:{
        id: 49,
        name:"Boutique Imaginaire",
        streetAddress:"1135 Rue King E",
        city:"Sherbrooke",
        province:"Quebec",
        phoneNumber:"(819) 555-0149",
        imageAddress:"../img/stores/store49.jpg",
        domesticGames:true,
        importGames:false,
        miniatureGames:true,
        cardGames:true,
        roleplayingGames:true
      }
    },

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-79.249916,43.157585] 
    },  
    properties:{
      id: 1,
      name: "The War College", 
      streetAddress: "47 Williams St", 
      city: "St. Catharines", 
      province: "Ontario", 
      phoneNumber: "(905) 555-0101",
      imageAddress: "../img/stores/store1.jpg",
      domesticGames: true,
      importGames: false,
      miniatureGames: true,
      cardGames: false,
      roleplayingGames: false 
    }
  },

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-79.072848,43.101578] 
    }, 
    properties:{
      id: 7,
      name: "Armoury Games", 
      streetAddress: "4775 Armoury St", 
      city: "Niagara Falls", 
      province: "Ontario", 
      phoneNumber: "(905) 555-0107",
      imageAddress: "../img/stores/store7.jpg",
      domesticGames: true,
      importGames: false,
      miniatureGames: false,
      cardGames: true,
      roleplayingGames: true   
    }
  },

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-113.496832,53.498606] 
    },   
    properties:{
      id: 11,
      name: "Board Game Junction", 
      streetAddress: "6107 104 St NW", 
      city: "Edmonton", 
      province: "Alberta", 
      phoneNumber: "(780) 555-0111",
      imageAddress: "../img/stores/store11.jpg",
      domesticGames: true,
      importGames: false,
      miniatureGames: true,
      cardGames: true,
      roleplayingGames: true 
    }
  },

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-123.098351,49.280418] 
    },
    properties:{
      id: 15,
      name: "Chits and Giggles", 
      streetAddress: "223 E. Pender St.", 
      city: "Vancouver", 
      province: "British Columbia", 
      phoneNumber: "(604) 555-0115",
      imageAddress: "../img/stores/store15.jpg",
      domesticGames: true,
      importGames: true,
      miniatureGames: true,
      cardGames: true,
      roleplayingGames: true
    }
  },

  {
    type:"Feature",
    geometry:{
      type:"point",
      coordinates:[-66.056996,45.276205]
    },
    properties:{
      id: 41,
      name:"Poseidon Games",
      streetAddress:"42 Waterloo St",
      city:"Saint John",
      province:"New Brunswick",
      phoneNumber:"(506) 555-0141",
      imageAddress:"../img/stores/store41.jpg",
      domesticGames:true,
      importGames:true,
      miniatureGames:true,
      cardGames:true,
      roleplayingGames:true
    }
  },

  {
    type:"Feature",
    geometry:{
      type:"point",
      coordinates:[-79.594447,43.597112]
    },
    properties:{
      id: 0,
      name:"War Games Academy",
      streetAddress:"888 Dundas St E. Unit E1",
      city:"Mississauga",
      province:"Ontario",
      phoneNumber:"(905) 555-0100",
      imageAddress:"../img/stores/store0.jpg",
      domesticGames:true,
      importGames:false,
      miniatureGames:true,
      cardGames:true,
      roleplayingGames:true
    }
  },

  {
    type:"Feature",
    geometry:{
      type:"point",
      coordinates:[-73.578070,45.503334]
    },
    properties:{
      id: 33,
      name:"Magic University Games",
      streetAddress:"3480 McTavish St",
      city:"Montreal",
      province:"Quebec",
      phoneNumber:"(514) 555-0133",
      imageAddress:"../img/stores/store33.jpg",
      domesticGames:true,
      importGames:false,
      miniatureGames:true,
      cardGames:true,
      roleplayingGames:true
    }
  },  

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-75.724687,45.269498] 
    },    
    properties:{
      id: 19,
      name: "The Robot's Cellar", 
      streetAddress: "702 Beatrice Dr", 
      city: "Nepean", 
      province: "Ontario", 
      phoneNumber: "(613) 555-0119",
      imageAddress: "../img/stores/store19.jpg",
      domesticGames: true,
      importGames: true,
      miniatureGames: true,
      cardGames: true,
      roleplayingGames: true     
    }
  },

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-79.430641,43.642849] 
    },  
    properties:{
      id: 28,
      name: "Noble Games", 
      streetAddress: "24 Noble St Unit 111", 
      city: "Toronto", 
      province: "Ontario", 
      phoneNumber: "(416) 555-0128",
      imageAddress: "../img/stores/store28.jpg",
      domesticGames: true,
      importGames: false,
      miniatureGames: true,
      cardGames: true,
      roleplayingGames: false
    }
  },

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-75.724794,45.403426] 
    },     
    properties:{
      id: 13,
      name: "Good Move Games", 
      streetAddress: "1076 Wellington St. W", 
      city: "Ottawa", 
      province: "Ontario", 
      phoneNumber: "(753) 555-0113",
      imageAddress: "../img/stores/store13.jpg",
      domesticGames: true,
      importGames: true,
      miniatureGames: true,
      cardGames: true,
      roleplayingGames: true 
    }
  },

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-79.767372,43.377319] 
    }, 
    properties:{
      id: 26,
      name: "We the Meeple", 
      streetAddress: "850 Appleby Line", 
      city: "Burlington", 
      province: "Ontario", 
      phoneNumber: "(905) 555-0126",
      imageAddress: "../img/stores/store26.jpg",
      domesticGames: true,
      importGames: false,
      miniatureGames: true,
      cardGames: true,
      roleplayingGames: true   
    }
  },

  {
    type:"Feature",
    geometry:{
      type:"point",
      coordinates:[-78.865127,43.899998]
    },
    properties:{
      id: 48,
      name:"The Game Box",
      streetAddress:"3 William St W",
      city:"Oshawa",
      province:"Ontario",
      phoneNumber:"(289) 555-0148",
      imageAddress:"../img/stores/store48.jpg",
      domesticGames:true,
      importGames:false,
      miniatureGames:false,
      cardGames:true,
      roleplayingGames:true
    }
  },   

  {
    type:"Feature",
    geometry:{
      type:"point",
      coordinates:[-106.664812,52.157586]
    },
    properties:{
      id: 34,
      name:"The Wolf Den",
      streetAddress:"405 Circle Dr",
      city:"Saskatoon",
      province:"Saskatchewan",
      phoneNumber:"(306) 555-0134",
      imageAddress:"../img/stores/store34.jpg",
      domesticGames:true,
      importGames:false,
      miniatureGames:false,
      cardGames:true,
      roleplayingGames:false
    }
  },

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-76.481561,44.232198] 
    },   
    properties:{
      id: 10,
      name: "Big House Games", 
      streetAddress: "51 Queen St", 
      city: "Kingston", 
      province: "Ontario", 
      phoneNumber: "(613) 555-0110",
      imageAddress: "../img/stores/store10.jpg",
      domesticGames: true,
      importGames: false,
      miniatureGames: true,
      cardGames: true,
      roleplayingGames: true    
    }
  },

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-123.356411,48.414196] 
    },  
    properties:{
      id: 23,
      name: "Beacon Hill Games", 
      streetAddress: "301 Cook St", 
      city: "Victoria", 
      province: "British Columbia", 
      phoneNumber: "(250) 555-0123",
      imageAddress: "../img/stores/store23.jpg",
      domesticGames: true,
      importGames: true,
      miniatureGames: false,
      cardGames: true,
      roleplayingGames: false  
    }
  },

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-97.133425,49.864745] 
    },   
    properties:{
      id: 14,
      name: "Victory Point", 
      streetAddress: "568 Osborne St", 
      city: "Winnipeg", 
      province: "Manitoba", 
      phoneNumber: "(204) 555-0114",
      imageAddress: "../img/stores/store14.jpg",
      domesticGames: true,
      importGames: false,
      miniatureGames: false,
      cardGames: true,
      roleplayingGames: false    
    }
  },

  {
    type:"Feature",
    geometry:{
      type:"point",
      coordinates:[-73.736081,45.567421]
    },
    properties:{
      id: 37,
      name:"Guilde des Voleurs",
      streetAddress:"1804 Blvd. le Corbusier",
      city:"Laval",
      province:"Quebec",
      phoneNumber:"(450) 555-0137",
      imageAddress:"../img/stores/store37.jpg",
      domesticGames:true,
      importGames:false,
      miniatureGames:true,
      cardGames:false,
      roleplayingGames:false
    }
  },

  {
    type:"Feature",
    geometry:{
      type:"point",
      coordinates:[-80.493509,43.451608]
    },
    properties:{
      id: 29,
      name:"Bell Tolls Games",
      streetAddress:"250 King St W",
      city:"Kitchener",
      province:"Ontario",
      phoneNumber:"(519) 555-0129",
      imageAddress:"../img/stores/store29.jpg",
      domesticGames:true,
      importGames:false,
      miniatureGames:true,
      cardGames:true,
      roleplayingGames:true
    }
  }, 

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-79.418010,43.683020] 
    },
    properties:{
      id: 25,
      name: "6ix-Sided Games", 
      streetAddress: "501 St Clair Ave W", 
      city: "Toronto", 
      province: "Ontario", 
      phoneNumber: "(416) 555-0125",
      imageAddress: "../img/stores/store25.jpg",
      domesticGames: true,
      importGames: false,
      miniatureGames: true,
      cardGames: true,
      roleplayingGames: true   
    }
  },

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-79.838940,43.238830] 
    },
    properties:{
      id: 6,
      name: "Miniature Worlds", 
      streetAddress: "8 E 36th St", 
      city: "Hamilton", 
      province: "Ontario", 
      phoneNumber: "(905) 555-0106",
      imageAddress: "../img/stores/store6.jpg",
      domesticGames: true,
      importGames: false,
      miniatureGames: true,
      cardGames: false,
      roleplayingGames: true     
    }
  },

  {
    type:"Feature",
    geometry:{
      type:"point",
      coordinates:[-84.326397,46.507369]
    },
    properties:{
      id: 39,
      name:"Quiet Nook Games",
      streetAddress:"756 Queen St E",
      city:"Sault Ste. Marie",
      province:"Ontario",
      phoneNumber:"(705) 555-0139",
      imageAddress:"../img/stores/store39.jpg",
      domesticGames:true,
      importGames:false,
      miniatureGames:false,
      cardGames:true,
      roleplayingGames:false
    }
  },

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-97.263041,49.875533] 
    }, 
    properties:{
      id: 4,
      name: "The Board and Peg", 
      streetAddress: "500 Moray St", 
      city: "Winnipeg", 
      province: "Manitoba", 
      phoneNumber: "(204) 555-0104",
      imageAddress: "../img/stores/store4.jpg",
      domesticGames: true,
      importGames: false,
      miniatureGames: true,
      cardGames: true,
      roleplayingGames: true    
    }
  },

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-75.706314,45.404577] 
    },  
    properties:{
      id: 24,
      name: "Parliament Hobby & Toy", 
      streetAddress: "234 Lebreton St N", 
      city: "Ottawa", 
      province: "Ontario", 
      phoneNumber: "(753) 555-0124",
      imageAddress: "../img/stores/store24.jpg",
      domesticGames: true,
      importGames: true,
      miniatureGames: false,
      cardGames: false,
      roleplayingGames: false
    }
  },

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-123.107404,49.280383] 
    },  
    properties:{
      id: 9,
      name: "So Fun City", 
      streetAddress: "526 Abbott St", 
      city: "Vancouver", 
      province: "British Columbia", 
      phoneNumber: "(604) 555-0109",
      imageAddress: "../img/stores/store9.jpg",
      domesticGames: true,
      importGames: true,
      miniatureGames: true,
      cardGames: true,
      roleplayingGames: true  
    }
  },

  {
    type:"Feature",
    geometry:{
      type:"point",
      coordinates:[-81.213545,42.996491]
    },
    properties:{
      id: 44,
      name:"Gateway Game Shop",
      streetAddress:"471 Nightingale Ave",
      city:"London",
      province:"Ontario",
      phoneNumber:"(519) 555-0144",
      imageAddress:"../img/stores/store44.jpg",
      domesticGames:true,
      importGames:false,
      miniatureGames:true,
      cardGames:true,
      roleplayingGames:true
    }
  },

  {
    type:"Feature",
    geometry:{
      type:"point",
      coordinates:[-66.650403,45.955791]
    },
    properties:{
      id: 40,
      name:"Rabbitton Games",
      streetAddress:"364 Victoria St",
      city:"Fredericton",
      province:"New Brunswick",
      phoneNumber:"(506) 555-0140",
      imageAddress:"../img/stores/store40.jpg",
      domesticGames:true,
      importGames:false,
      miniatureGames:false,
      cardGames:true,
      roleplayingGames:true
    }
  },

  {
    type:"Feature",
    geometry:{
      type:"point",
      coordinates:[-79.798584,43.322783]
    },
    properties:{
      id: 31,
      name:"Man the Games",
      streetAddress:"1407 Lakeshore Rd",
      city:"Burlington",
      province:"Ontario",
      phoneNumber:"(905) 555-0131",
      imageAddress:"../img/stores/store31.jpg",
      domesticGames:true,
      importGames:false,
      miniatureGames:true,
      cardGames:true,
      roleplayingGames:true
    }
  },

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-79.378219,43.659931] 
    },  
    properties:{
      id: 20,
      name: "Top Dex Card Shop", 
      streetAddress: "55 Gerrard St E", 
      city: "Toronto", 
      province: "Ontario", 
      phoneNumber: "(416) 555-0120",
      imageAddress: "../img/stores/store20.jpg",
      domesticGames: true,
      importGames: false,
      miniatureGames: false,
      cardGames: true,
      roleplayingGames: false   
    }
  },

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-122.975596,49.249551] 
    }, 
    properties:{
      id: 5,
      name: "GiGi's Game Shop", 
      streetAddress: "3905 Norland Ave", 
      city: "Burnaby", 
      province: "British Columbia", 
      phoneNumber: "(604) 555-0105",
      imageAddress: "../img/stores/store5.jpg",
      domesticGames: true,
      importGames: false,
      miniatureGames: false,
      cardGames: true,
      roleplayingGames: false   
    }
  },

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-75.677623,45.490911] 
    },   
    properties:{
      id: 12,
      name: "Rouler+Bouger", 
      streetAddress: "655 Bd Saint-René O", 
      city: "Gatineau", 
      province: "Quebec", 
      phoneNumber: "(819) 555-0112",
      imageAddress: "../img/stores/store12.jpg",
      domesticGames: true,
      importGames: true,
      miniatureGames: false,
      cardGames: true,
      roleplayingGames: true
    }
  },

  {
    type:"Feature",
    geometry:{
      type:"point",
      coordinates:[-80.264087,43.145033]
    },
    properties:{
      id: 30,
      name:"Brant Games",
      streetAddress:"187 Market St",
      city:"Brantford",
      province:"Ontario",
      phoneNumber:"(519) 555-0130",
      imageAddress:"../img/stores/store30.jpg",
      domesticGames:true,
      importGames:true,
      miniatureGames:true,
      cardGames:true,
      roleplayingGames:true
    }
  },

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [43.521155,-80.232651] 
    },  
    properties:{
      id: 27,
      name: "Academic Games & Toys", 
      streetAddress: "502 Edinburgh Rd S", 
      city: "Guelph", 
      province: "Ontario", 
      phoneNumber: "(519) 555-0127",
      imageAddress: "../img/stores/store27.jpg",
      domesticGames: true,
      importGames: false,
      miniatureGames: true,
      cardGames: true,
      roleplayingGames: true
    }
  },

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-113.477455,53.512612] 
    },     
    properties:{
      id: 17,
      name: "Dice Guys", 
      streetAddress: "9618 76 Ave NW", 
      city: "Edmonton", 
      province: "Alberta", 
      phoneNumber: "(780) 555-0117",
      imageAddress: "../img/stores/store17.jpg",
      domesticGames: true,
      importGames: false,
      miniatureGames: true,
      cardGames: true,
      roleplayingGames: true       
    }
  },

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-114.081083,51.044259] 
    }, 
    properties:{
      id: 3,
      name: "Magic Mountain Games", 
      streetAddress: "830 10 Ave SW", 
      city: "Calgary", 
      province: "Alberta", 
      phoneNumber: "(403) 555-0103",
      imageAddress: "../img/stores/store3.jpg",
      domesticGames: true,
      importGames: false,
      miniatureGames: false,
      cardGames: true,
      roleplayingGames: true     
    }
  },

  { 
    type: "Feature",
    geometry:{
      type: "point",
      coordinates: [-79.86343,43.250011] 
    },  
    properties:{
      id: 8,
      name: "Board Game Renaissance", 
      streetAddress: "100 Ferguson Ave S", 
      city: "Hamilton", 
      province: "Ontario", 
      phoneNumber: "(905) 555-0108",
      imageAddress: "../img/stores/store8.jpg",
      domesticGames: true,
      importGames: true,
      miniatureGames: true,
      cardGames: true,
      roleplayingGames: true  
    }
  },

  {
    type:"Feature",
    geometry:{
      type:"point",
      coordinates:[-83.004302,42.300199]
    },
    properties:{
      id: 45,
      name:"Many Sisters Toys & Games",
      streetAddress:"1421 Tecumseh Rd E",
      city:"Windsor",
      province:"Ontario",
      phoneNumber:"(519) 555-0145",
      imageAddress:"../img/stores/store45.jpg",
      domesticGames:true,
      importGames:true,
      miniatureGames:false,
      cardGames:true,
      roleplayingGames:true
    }
  },

  {
    type:"Feature",
    geometry:{
      type:"point",
      coordinates:[-89.936015,48.436324]
    },
    properties:{
      id: 36,
      name:"Storm Giant Games",
      streetAddress:"200 Van Norman St",
      city:"Thunder Bay",
      province:"Ontario",
      phoneNumber:"(807) 555-0136",
      imageAddress:"../img/stores/store36.jpg",
      domesticGames:true,
      importGames:false,
      miniatureGames:true,
      cardGames:false,
      roleplayingGames:false
    }
  },

  {
    type:"Feature",
    geometry:{
      type:"point",
      coordinates:[-113.814881,52.285798]
    },
    properties:{
      id: 35,
      name:"Highland Games",
      streetAddress:"6320 Gaetz Ave",
      city:"Red Deer",
      province:"Alberta",
      phoneNumber:"(403) 555-0135",
      imageAddress:"../img/stores/store35.jpg",
      domesticGames:true,
      importGames:false,
      miniatureGames:true,
      cardGames:true,
      roleplayingGames:true
    }
  },

  {
    type:"Feature",
    geometry:{
      type:"point",
      coordinates:[-75.656186,45.438113]
    },
    properties:{
      id: 32,
      name:"Janeville Games",
      streetAddress:"347 Montréal Rd",
      city:"Vanier",
      province:"Ontario",
      phoneNumber:"(613) 555-0132",
      imageAddress:"/img/stores/store32.jpg",
      domesticGames:true,
      importGames:false,
      miniatureGames:true,
      cardGames:false,
      roleplayingGames:true
    }
  } 


]


export default stores


