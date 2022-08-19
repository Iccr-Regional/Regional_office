import React from "react";
import BarChart1 from "./BarChart1";
import { Consumer } from "./context";
import Navigation from "./Navigation";
import RegionalEvents from "./RegionalEvents";;

function RegionalOfficePage(props) {
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
            <Navigation/>
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
            <BarChart1/>
          </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default RegionalOfficePage;
