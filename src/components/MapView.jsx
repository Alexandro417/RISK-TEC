import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView() {
  useEffect(() => {
    const map = L.map("map").setView([19.4326, -99.1332], 14);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);
  }, []);

  return <div id="map" style={{ height: "80vh", width: "100%" }}></div>;
}
