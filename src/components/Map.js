import {
  MapContainer,
  Marker,
  Polygon,
  Polyline,
  Popup,
  TileLayer,
} from "react-leaflet";
import { useState } from "react";
import { markerArr, mainLines, parkWalks } from "../data/markerData";
import "./Map.css";

const Map = ({
  showMainlines,
  showParkWalks,
  setTableData,
  comparisonOne,
  setComparisonOne,
  comparisonTwo,
  setComparisonTwo,
}) => {
  const [place, setPlace] = useState(null);

  return (
    <div className="leaflet-container">
      <MapContainer
        center={[52.561660172543796, -1.8314652542381604]}
        zoom={12}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {markerArr.map((marker) => (
          <Marker
            key={marker.name}
            position={[marker.coOrds[0], marker.coOrds[1]]}
            eventHandlers={{
              click: () => {
                setPlace(marker);
                setTableData(marker);
              },
            }}
          ></Marker>
        ))}
        {showMainlines && (
          <Polyline pathOptions={{ color: "blue" }} positions={mainLines} />
        )}
        {place && (
          <Popup
            position={[place.coOrds[0], place.coOrds[1]]}
            eventHandlers={{
              close: () => {
                setPlace(null);
              },
            }}
          >
            <div className="pop-up">
              <p>{place.name}</p>
            </div>
          </Popup>
        )}
        {showParkWalks && (
          <Polygon pathOptions={{ color: "black" }} positions={parkWalks} />
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
