import React from "react";
import { Map, Marker, Popup, TileLayer ,Control} from "react-leaflet";
import  * as parkD from "../data/data.json";
import "./Map2.css";


export default function AppOSM() {
  const [activePark, setActivePark] = React.useState(null);

  return (
    <Map
    center={[35.610865, 10.7]} zoom={7}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {parkD.client.map(park => (
        <Marker

          position={[
            park.geometry.coordinates[1],
            park.geometry.coordinates[0]
          ]}
          onClick={() => {
            setActivePark(park);
          }}
        />
      ))}

      {activePark && (
        <Popup
          position={[
            activePark.geometry.coordinates[1],
            activePark.geometry.coordinates[0]
          ]}
          onClose={() => {
            setActivePark(null);
          }}
        >
          <div>
            <h1>{activePark.name}</h1>
            <p>{activePark.adresse} </p>
            <p>{activePark.téléphone} </p>
            <p>{activePark.site_web} </p>
            
          </div>
        </Popup>
      )}
    </Map>
  );
}