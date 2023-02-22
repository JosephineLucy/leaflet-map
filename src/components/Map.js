import {
  MapContainer,
  Marker,
  Polygon,
  Polyline,
  Popup,
  TileLayer,
} from "react-leaflet";
import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useState, useEffect } from "react";
import { mainLines, parkWalks } from "../data/markerData";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import mapIcon from "../locationIcon.png";

const Map = ({ showMainlines, showParkWalks, setTableData }) => {
  const CustomIcon = new L.Icon({
    iconUrl: mapIcon,
    iconSize: new L.Point(45, 48),
  });

  const createClusterCustomIcon = function (cluster) {
    return L.divIcon({
      html: `<span>${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: L.point(33, 33, true),
    });
  };
  const [place, setPlace] = useState(null);
  const [markers, setMarkers] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/markers")
      .then((response) => {
        const results = response.json();
        return results;
      })
      .then((results) => {
        setMarkers(results);
      });
  }, []);

  return (
    <div className="leaflet-container">
      {!!markers ? (
        <MapContainer
          center={[52.561660172543796, -1.8314652542381604]}
          zoom={12}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <MarkerClusterGroup
            // onClick={(e) => console.log("onClick", e)}
            chunkedLoading
            iconCreateFunction={createClusterCustomIcon}
            maxClusterRadius={30}
            spiderfyOnMaxZoom={true}
            polygonOptions={{
              fillColor: "##3486eb",
              color: "##3486eb",
              weight: 5,
              opacity: 1,
              fillOpacity: 0.8,
            }}
            showCoverageOnHover={true}
          >
            {markers &&
              markers.map((marker) => (
                <Marker
                  key={marker.name}
                  position={[marker.coOrds[0], marker.coOrds[1]]}
                  icon={CustomIcon}
                  eventHandlers={{
                    click: () => {
                      setPlace(marker);
                      setTableData(marker);
                    },
                  }}
                >
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
                </Marker>
              ))}
          </MarkerClusterGroup>
          {showParkWalks && (
            <Polygon pathOptions={{ color: "black" }} positions={parkWalks} />
          )}

          {showMainlines && (
            <Polyline pathOptions={{ color: "blue" }} positions={mainLines} />
          )}
        </MapContainer>
      ) : null}
    </div>
  );
};

export default Map;
