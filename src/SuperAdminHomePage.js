import React from "react";
import Slider from "./Slider";
import Flash from "./Flash";
import RegionalOfficeSection from "./RegionalOfficeSection";
import SuperAdminNavigation from "./SuperAdminNavigation";

function SuperAdminHomePage() {
  return (
    <div className="">
        <SuperAdminNavigation/>
        <Slider/>
        <Flash/>
        <RegionalOfficeSection/>
    </div>
  );
}

export default SuperAdminHomePage;