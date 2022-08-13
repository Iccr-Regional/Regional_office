import React from "react";
import Slider from "./Slider";
import Flash from "./Flash";
import SuperAdminRegionalOfficeSection from "./SuperAdminRegionalOfficeSection";
import SuperAdminNavigation from "./SuperAdminNavigation";
import SuperAdminCurrentEvents from "./SuperAdminCurrentEvents";

function SuperAdminHomePage() {
  return (
    <div className="">
        <SuperAdminNavigation/>
        <Slider/>
        <Flash/>
        <SuperAdminCurrentEvents/>
        <SuperAdminRegionalOfficeSection/>
    </div>
  );
}

export default SuperAdminHomePage;