import React from "react";
import Slider from "./Slider";
import Flash from "./Flash";
import RegionalOfficeSection from "./RegionalOfficeSection";
import AdminNavigation from "./AdminNavigation";

function AdminHomePage() {
  return (
    <div className="">
        <AdminNavigation top="fixed"/>
        <Slider/>
        <Flash/>
        <RegionalOfficeSection/>
    </div>
  );
}

export default AdminHomePage;