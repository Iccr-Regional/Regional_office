import React from "react";
import { Consumer } from "./context";
import SuperAdminNavigation from "./SuperAdminNavigation";
import RegionalEvents from "./RegionalEvents";;

function SuperAdminRegionalOfficePage(props) {
  return (
    <Consumer>
      {(value) => {
        const { regionalOffices } = value;
        const id = props.match.params.id;
        const regionalOffice = regionalOffices.filter((regionalOffice) => regionalOffice.rid == id)[0];
        const { rimage, rname, rdesc, rlocation } = regionalOffice;
        const rOName = rname;
        return (
          <div>
            <SuperAdminNavigation/>
          <div className="container py-5 my-5 markdown">
            <div className="justify-content-center m1">
              <img src={rimage} alt={rname} className="w-100" />
            </div>
            <h1 className="font-weight-light text-center my-5">{rname}</h1>
            <h1 className="font-weight-light  text-center my-5">Address: {rlocation}</h1>
            <p className="font-weight-light text-center my-5">{rdesc}</p>
            <div className="p-5">
                <RegionalEvents rOName={rOName}/>
            </div>
          </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default SuperAdminRegionalOfficePage;
