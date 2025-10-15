import * as React from "react";
import Map, { Marker } from "react-map-gl";

export default function MapDashboard() {
  const TECNM_COORDS = { latitude: 23.6515, longitude: -100.6437 }; // Matehuala, SLP

  return (
    <div style={{ height: "90vh" }}>
      <Map
        initialViewState={{
          longitude: TECNM_COORDS.longitude,
          latitude: TECNM_COORDS.latitude,
          zoom: 16,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken="TU_TOKEN_MAPBOX_AQUI"
      >
        <Marker latitude={TECNM_COORDS.latitude} longitude={TECNM_COORDS.longitude} color="red" />
      </Map>
    </div>
  );
}
