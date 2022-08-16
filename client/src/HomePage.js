import React from "react";
import Slider from "./Slider";
import Flash from "./Flash";
import RegionalOfficeSection from "./RegionalOfficeSection";
import Navigation from "./Navigation";
import BarChart from "./BarChart";
import CurrentEvents from "./CurrentEvents";


function HomePage() {
  return (
    <div className="">
        <Navigation/>
        <Slider/>
        <Flash/>
        <CurrentEvents/>
        <RegionalOfficeSection/>
        <BarChart/>
    </div>
  );
}

export default HomePage;
