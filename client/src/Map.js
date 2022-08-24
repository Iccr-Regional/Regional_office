import React from "react";
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react'
import './map.css';
//import locationIcon from '@iconify/icons-mdi/map-marker';
const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
  const LocationPin = ({ text }) => (
    <div className="pin">
      {/* <Icon icon={locationIcon} className="pin-icon" /> */}
      
      <p className="pin-text">{text}</p>
    </div>
  )
export default Map;