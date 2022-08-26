import React from "react";
import { Consumer } from "./context";
import { useLocation } from "react-router-dom";
import AdminNavigation from "./AdminNavigation";
import AdminRegionalEvents from "./AdminRegionalEvents";
import BarChart1 from "./BarChart1";

function AdminRegionalOfficePage(props) {
  // return (
  //   <Consumer>
  //     {(value) => {
  //       const { regionalOffices } = value;
        const id = props.match.params.id;
        const regionalOffice=useLocation().state?.office;
        // const { rimage, rname, rdesc, rlocation } = regionalOffice;
        const rId = regionalOffice.rid;
        return (
          <div>
          <AdminNavigation/>
          <div className="container py-5 my-5 markdown">
      <h1 className="display-1 text-center my-5 sizing-1">{regionalOffice.rname}</h1>
            <div className="d-flex justify-content-center m1">
              <img src={regionalOffice.rimage} alt={regionalOffice.rname}  className="w-50" />
            </div>
            <h4 className="font-weight-light text-left my-5 ">{regionalOffice.rdesc}</h4>
            <ul>
              <li><h4 className="font-weight-light  my-5"><b>Budget:</b> {regionalOffice.budget}</h4></li>
              <li><h4 className="font-weight-light   my-5 "><b>Address:</b> {regionalOffice.rlocation}</h4></li>
              <li><h4 className="font-weight-light  my-5"><b>Email:</b> {regionalOffice.remail}</h4></li>
              <li><h4 className="font-weight-light  my-5"><b>Contact:</b> {regionalOffice.rcontact}</h4></li>
            </ul>
            <div className="p-5">
                <AdminRegionalEvents rId={regionalOffice.rid}/>
            </div>
          </div>
          <BarChart1/>
          </div>
        );
      }
    
  

export default AdminRegionalOfficePage;