import React from "react";
import { Consumer } from "./context";
import RegionalOfficeCard from "./RegionalOfficeCard";

function SuperAdminAllRegionalOffices() {
  return (
    <Consumer>
      {(value) => {
        const { regionalOffices } = value;
        return (
          <div className="container text-center my-5 py-5">
            <h1 className="font-weight-light py-5">
              All Regional Offices
            </h1>
            <div className="row my-4 pt-4">
              {regionalOffices.map((regionalOffice) => (
                <div key={regionalOffice.rid} className="col-12 col-md-6 py-3">
                  <RegionalOfficeCard regionalOffice={regionalOffice} />
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default SuperAdminAllRegionalOffices;