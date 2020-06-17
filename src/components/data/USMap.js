import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const USMap = () => {
  const mapStyles = {
    width: "100%",
    height: "100%",
  };

  return (
    <div>
      <h1>US Map will go here</h1>
      <Map
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 38.5266,
          lng: -96.7265,
        }}
      />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "",
})(USMap);
