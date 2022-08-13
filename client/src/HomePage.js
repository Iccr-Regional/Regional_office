import React from "react";
import Slider from "./Slider";
import Flash from "./Flash";
import RegionalOfficeSection from "./RegionalOfficeSection";
import Navigation from "./Navigation";
//import Bchart from "./Bchart";
import BarChart from "./BarChart";
import CurrentEvents from "./CurrentEvents";
import { XyzTransition } from "@animxyz/react";
import Footer from "./footer";

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
