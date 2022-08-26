import React from "react";
import DynamicTable from "./DynamicTable";
import Footer from "./footer";
import Navigation from "./Navigation";
function StudentPage()
{
    return(
        <div>
            <Navigation/>
            <br/><br/>
            <div className="py-5">
            <DynamicTable/>
            </div>
            <Footer/>
        </div>
    );
}
export default StudentPage;