import React, { Component } from "react";
import { Map, GoogleApiWrapper, Circle } from "google-maps-react";

const mapStyles = {
  width: "1400px",
  height: "800px",
  margin: "auto",
  marginTop: "20px",
};

export class USMap extends Component {
  render() {
    const coords = { lat: 38.5266, lng: -96.7265 };

    return (
      <Map
        google={this.props.google}
        zoom={6}
        style={mapStyles}
        initialCenter={{
          lat: 38.5266,
          lng: -96.7265,
        }}
      >
        <Circle
          radius={1200}
          center={coords}
          onMouseover={() => console.log("mouseover")}
          onClick={() => console.log("click")}
          onMouseout={() => console.log("mouseout")}
          strokeColor="transparent"
          strokeOpacity={0}
          strokeWeight={5}
          fillColor="#FF0000"
          fillOpacity={0.2}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "",
})(USMap);
