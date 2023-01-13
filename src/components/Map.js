/* eslint-disable react/jsx-no-undef */
import React, { useState, useCallback, Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import dotenv from 'dotenv';

const containerStyle = {
  width: '1000px',
  height: '100vh',
  float: 'right',
};

const center = {
  lat: 37.566535,
  lng: 126.9779692,
};

const position = {
  lat: 37.482476,
  lng: 126.9415,
};

class Map extends Component {
  render() {
    return (
      <LoadScript googleMapsApiKey="REACT_APP_GOOGLE_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        ></GoogleMap>
      </LoadScript>
    );
  }
}
dotenv.config();
export default Map;
