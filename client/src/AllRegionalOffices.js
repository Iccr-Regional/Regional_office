import React, { useEffect } from "react";
import { Consumer } from "./context";
import RegionalOfficeCard from "./RegionalOfficeCard";
import Axios from 'axios';
import { useState } from "react";
import { getByDisplayValue } from "@testing-library/react";

function AllRegionalOffices() {
  const [regionalOffice,setregionaloffice]=useState([]);
  const Display = ()=>{
    Axios.get('http://localhost:3001/employees').then((response)=>{
      console.log(response.data);
      setregionaloffice(response.data);
    }).catch(err=>{
      console.log(err)
    });
  };

 useEffect(()=>{//THis is used for 
  Display();
 },[])
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
              {regionalOffice.map((office) => (
                <div key={office.rid} className="col-12 col-md-6 py-3">
                  <RegionalOfficeCard regionalOffice={office} />
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default AllRegionalOffices;