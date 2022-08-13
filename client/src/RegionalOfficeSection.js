import React from "react";
import RegionalOfficeCard from "./RegionalOfficeCard";
import { Consumer } from "./context";
import { Link } from "react-router-dom";
function RegionalOfficeSection() {
  return (
    <Consumer>
      {(value) => {
        const { regionalOffices } = value;
        return (
          <div className="container text-center my-5">
            <h1 className="font-weight-light">
              Regional Offices
            </h1>
            <div className="row my-5 pt-3">
              {regionalOffices.slice(0, 3).map((regionalOffice) => (
                <div key={regionalOffice.rid} className="col-12 col-md-4 my-2">
                  <RegionalOfficeCard regionalOffice={regionalOffice} />
                </div>
              ))}
            </div>
            <div className="my-5 text-right" >
              <Link to="/allregionaloffices" className="text-dark text-right">
                {/* <h5>
                  See all Regional Offices
                  <i className="fas fa-arrow-right align-middle pl-1"></i>
                </h5> */}
                <button
                      type="submit"
                      className="btn btn-dark align-items-right"
                      style={{ backgroundColor: "black" }}
                    >
                      See all regional offices
                    </button>
              </Link>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default RegionalOfficeSection;
