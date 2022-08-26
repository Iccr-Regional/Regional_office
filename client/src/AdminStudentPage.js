import React from "react";
import AdminDynamicTable from "./AdminDynamicTable";
import Footer from "./footer";
import Navigation from "./Navigation";
function AdminStudentPage()
{
    return(
        <div>
            <Navigation/>
            <br/><br/>
            <div className="py-5">
            <AdminDynamicTable/>
            </div>
            <Footer/>
        </div>
    );
}
export default AdminStudentPage;