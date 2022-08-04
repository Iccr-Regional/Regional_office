import React from "react";
import Slider from "./Slider";
import Flash from "./Flash";
import RegionalOfficeSection from "./RegionalOfficeSection";
import Navigation from "./Navigation";
import Bchart from "./Bchart";


function HomePage() {
  return (
    <div className="">
        <Navigation/>
        <Slider/>
        <Flash/>
        <RegionalOfficeSection/>
        <Bchart/>
    </div>
  );
}

export default HomePage;
