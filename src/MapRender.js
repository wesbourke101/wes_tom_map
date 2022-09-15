import React, { useState } from "react";
import { GoogleMap, useLoadScript, Maker, InfoWindow } from "@react-google-maps/api";
import { formatRelative } from "date-fns";

const libraries = ["places"]
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
}
const center = {
  lat: 43.,
  lng: -80
}

function MapRender () {
  const { isLoaded, LoadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  if(LoadError) return "Erroe loading maps";
  if(!isLoaded) return "Loading Map";
    return (
        <div>
          <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center}>
          </GoogleMap>
        </div>
    );
}
export default MapRender;





