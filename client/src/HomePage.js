import React from "react";
import Slider from "./Slider";
import Flash from "./Flash";
import RegionalOfficeSection from "./RegionalOfficeSection";
import Navigation from "./Navigation";
import BarChart from "./BarChart";
import CurrentEvents from "./CurrentEvents";
import Footer from "./footer";
import background from "./background";
import Map1 from "./Map1";
function HomePage() {
  return (
    <div className="">
        <Navigation/>
        <Slider/>
        <Flash/>
        <background/>
        <CurrentEvents/>
        <RegionalOfficeSection/>
        <BarChart/>
        <Map1/>
        <Footer/>
    </div>
  );
}

export default HomePage;
