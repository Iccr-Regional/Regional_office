import React from "react";
import Slider from "./Slider";
import Flash from "./Flash";
import AdminRegionalOfficeSection from "./AdminRegionalOfficePage";
import AdminNavigation from "./AdminNavigation";
import AdminCurrentEvents from "./AdminCurrentEvents";
import BarChart from "./BarChart";

function AdminHomePage() {
  return (
    <div className="">
        <AdminNavigation/>
        <Slider/>
        <Flash/>
        <AdminCurrentEvents/>
        <AdminRegionalOfficeSection/>
        <BarChart/>
    </div>
  );
}


export default AdminHomePage;