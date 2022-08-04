import React from "react";
import Slider from "./Slider";
import Flash from "./Flash";
import RegionalOfficeSection from "./RegionalOfficeSection";
import Navigation from "./Navigation";


function HomePage() {
  return (
    <div className="">
        <Navigation/>
        <Slider/>
        <Flash/>
        <RegionalOfficeSection/>
        
    </div>
  );
}

export default HomePage;
