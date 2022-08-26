import React from "react";
import MapSection from "./Map";
const location = {
    
    lat: 28.635324,
    lng: 77.224944,
  } // our location object from earlier
  
  const Map1 = () => (
    <div className="App">
      <MapSection location={location} zoomLevel={17} /> {/* include it here */}
    </div>
  )
  
  export default Map1;