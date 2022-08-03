import React from "react";
import Slider from "./Slider";
import Flash from "./Flash";
import RegionalOfficeSection from "./RegionalOfficeSection";
import Navigation from "./Navigation";
import BarChart from "./BarChart";

function HomePage() {
  return (
    <div className="">
        <Navigation/>
        <Slider/>
        <Flash/>
        <RegionalOfficeSection/>
        <BarChart/>
    </div>
  );
}

export default HomePage;
