const markerArr = [
  {
    name: "TGI Fridays",
    coOrds: [52.56105422973633, -1.8219709396362305],
    googleRating: 4.1,
    imgURL:
      "https://lh3.googleusercontent.com/p/AF1QipOB-Vnsi2Z08JpYaAKrXnfyisZvqU1_rCpZ9bfU=s680-w680-h510",
    type: "restaurant",
  },
  {
    name: "Wyndley Leisure Centre",
    coOrds: [52.562618255615234, -1.8336868286132812],
    type: "gym",
    googleRating: 4.1,
  },
  {
    name: "Under Pressure Espresso",
    coOrds: [52.5593537, -1.8260082],
    type: "coffee shop",
    googleRating: 4.7,
  },
  {
    name: "New Hall Valley Country Park",
    coOrds: [52.54953, -1.80573],
    type: "park",
    googleRating: 4.6,
  },
  {
    name: "Sunnybank",
    coOrds: [52.5415476, -1.8340355],
    type: "residential",
    googleRating: 5,
  },
  {
    name: "Costa Wylde Green",
    coOrds: [52.537288, -1.827556],
    type: "coffee shop",
    googleRating: 4.2,
  },
  {
    name: "Boldmere Gate",
    coOrds: [52.55592402645637, -1.8442376768712943],
    type: "sutton park",
    googleRating: 4.7,
  },
  {
    name: "Banners Gate",
    coOrds: [52.557232936482556, -1.8678662955245962],
    type: "sutton park",
    googleRating: 4.7,
  },
  {
    name: "Four Oaks Gate",
    coOrds: [52.58477585194859, -1.8399671707098575],
    type: "sutton park",
    googleRating: 4.7,
  },
  {
    name: "Town Gate",
    coOrds: [52.56506177721447, -1.8297563887416324],
    type: "sutton park",
    googleRating: 4.7,
  },
  {
    name: "Jamboree Stone",
    coOrds: [52.571009834819755, -1.856759092029483],
    type: "sutton park",
    googleRating: 4.7,
  },
  {
    name: "The Garden Room",
    coOrds: [52.54441859841507, -1.8509276811959907],
    type: "coffee shop",
    googleRating: 4.4,
  },
  {
    name: "Blackroot Bistro",
    coOrds: [52.57142547958658, -1.8407605843063202],
    type: "coffee shop",
    googleRating: 4.4,
  },
];

const markerObj = {
  tgi: {
    name: "TGI Fridays",
    coOrds: [52.56105422973633, -1.8219709396362305],
  },
  wyndley: {
    name: "Wyndley Leisure Centre",
    coOrds: [52.562618255615234, -1.8336868286132812],
  },
  upe: {
    name: "Under Pressure Espresso",
    coOrds: [52.5593537, -1.8260082],
  },
  newHall: {
    name: "New Hall Valley Country Park",
    coOrds: [52.54953, -1.80573],
  },
  sunnybank: {
    name: "Sunnybank",
    coOrds: [52.5415476, -1.8340355],
  },
  costa: {
    name: "Costa Wylde Green",
    coOrds: [52.537288, -1.827556],
  },
  boldmereGate: {
    name: "Boldmere Gate",
    coOrds: [52.55592402645637, -1.8442376768712943],
  },
  bannersGate: {
    name: "Banners Gate",
    coOrds: [52.557232936482556, -1.8678662955245962],
  },
  fourOaksGate: {
    name: "Four Oaks Gate",
    coOrds: [52.58477585194859, -1.8399671707098575],
  },
  townGate: {
    name: "Town Gate",
    coOrds: [52.56506177721447, -1.8297563887416324],
  },
  jamboree: {
    name: "Jamboree Stone",
    coOrds: [52.571009834819755, -1.856759092029483],
  },
  gardenRoom: {
    name: "The Garden Room",
    coOrds: [52.54441859841507, -1.8509276811959907],
  },
  blackroot: {
    name: "Blackroot Bistro",
    coOrds: [52.57142547958658, -1.8407605843063202],
  },
};

const mainLines = [
  [
    markerObj.fourOaksGate.coOrds,
    markerObj.blackroot.coOrds,
    markerObj.boldmereGate.coOrds,
    markerObj.gardenRoom.coOrds,
  ],
  [
    markerObj.fourOaksGate.coOrds,
    markerObj.townGate.coOrds,
    markerObj.upe.coOrds,
    markerObj.costa.coOrds,
  ],
  [
    markerObj.fourOaksGate.coOrds,
    markerObj.townGate.coOrds,
    markerObj.tgi.coOrds,
    markerObj.newHall.coOrds,
  ],
  [
    markerObj.fourOaksGate.coOrds,
    markerObj.jamboree.coOrds,
    markerObj.bannersGate.coOrds,
  ],
];

const parkWalks = [
  [
    markerObj.bannersGate.coOrds,
    markerObj.jamboree.coOrds,
    markerObj.boldmereGate.coOrds,
  ],
  [
    markerObj.boldmereGate.coOrds,
    markerObj.blackroot.coOrds,
    markerObj.townGate.coOrds,
    markerObj.wyndley.coOrds,
  ],
];

export { markerArr, mainLines, parkWalks };
