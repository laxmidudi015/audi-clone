// DealerMap.jsx
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./DealerMap.css";

function DealerMap() {
  return (
    <MapContainer
      center={[20.5937, 78.9629]} // India coordinates
      zoom={4}
      scrollWheelZoom={true}
      className="leaflet-map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* You can add markers here later */}
    </MapContainer>
  );
}

export default DealerMap;
