import React from "react";
import {useLocation} from "react-router-dom";
import BarChart from "./BarChart";
import SuperAdminNavigation from "./SuperAdminNavigation";
import SuperAdminRegionalEvents from "./SuperAdminRegionalEvents";
import BarChart1 from "./BarChart1";
function SuperAdminRegionalOfficePage(props) {
  // return (
  //   <Consumer>
  //     {(value) => {
  //       const { regionalOffices } = value;
       const id = props.match.params.id;
       const regionalOffice=useLocation().state?.office;
  //       const regionalOffice = regionalOffices.filter((regionalOffice) => regionalOffice.rid == id)[0];
  //       const { rimage, rname, rdesc, rlocation } = regionalOffice;
        const rId = regionalOffice.rid;
        return (
          <div>
            <SuperAdminNavigation/>
          <div className="container py-5 my-5 markdown">
            <div className="justify-content-center m1">
              <img src={regionalOffice.rimage} alt={regionalOffice.rname} className="w-100" />
            </div>
            <h1 className="font-weight-light text-center my-5">{regionalOffice.rname}</h1>
            <h1 className="font-weight-light  text-center my-5">Address: {regionalOffice.rlocation}</h1>
            <p className="font-weight-light text-center my-5">{regionalOffice.rdesc}</p>
            <div className="p-5">
                <SuperAdminRegionalEvents rId={regionalOffice.rid}/>
            </div>
          </div>
          <BarChart1/>
          </div>
        );
      }

export default SuperAdminRegionalOfficePage;
