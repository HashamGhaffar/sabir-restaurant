import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface MapProps {
  lat: number;
  lng: number;
}

const MapComponent: React.FC<MapProps> = ({ lat, lng }) => {
  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  const defaultCenter = {
    lat: lat,
    lng: lng,
  };

  return (
    <LoadScript googleMapsApiKey="apiKey">
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
