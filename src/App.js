import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

function App() {
  const markerArr = [
    { name: "TGI Fridays", coOrds: [52.56105422973633, -1.8219709396362305] },
    {
      name: "Wyndley Leisure Centre",
      coOrds: [52.562618255615234, -1.8336868286132812],
    },
    {
      name: "Under Pressure Espresso",
      coOrds: [52.5593537, -1.8260082],
    },
    {
      name: "Heart of the Country",
      coOrds: [52.64982986450195, -1.8083280324935913],
    },
    {
      name: "Sunnybank",
      coOrds: [52.5415476, -1.8340355],
    },
    {
      name: "St Nicholas Church",
      coOrds: [52.5328563, -1.7391058],
    },
  ];

  return (
    <div className="App">
      <div className="leaflet-container">
        <MapContainer center={[52.593719, -1.79051]} zoom={12}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {markerArr.map((marker) => (
            <Marker
              key={marker.name}
              position={[marker.coOrds[0], marker.coOrds[1]]}
            />
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
