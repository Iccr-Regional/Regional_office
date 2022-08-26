import Map1 from './Map1';
import Map from './Map';
import React from 'react'
import BarChart1  from './BarChart1';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './Navigation';
import RegionalEvents from "./RegionalEvents";
import Footer from './footer';
import { NavDropdown } from 'react-bootstrap';
import {Link} from "react-router-dom";


const RegionalOfficePage = (props) => {
  const id = props.match.params.id;
  console.log(id);
  const regionalOffice = useLocation().state?.office;
  const [name,setname]=useState("events");
        const onclick1=()=>{
           setname("events");
        };
        const onclick2=()=>{
           setname("ro");
        };
        const onclick3=()=>{
           setname("scholarship");
        };

  return (
    <div>
    <Navigation />
    <div className="container py-5 my-5 markdown">
             
            <h1 className="display-1 text-center my-3 ">{regionalOffice.rname}</h1>
            <div className="d-flex justify-content-center m1">
              <img src={regionalOffice.rimage} alt={regionalOffice.rname}  className="w-50" />
            </div>
            <h4 className="font-weight-light text-left my-5 "><b>About:</b>{regionalOffice.rdesc}</h4>
            <ul>
              <li><h4 className="font-weight-light  my-5"><b>Budget:</b> {regionalOffice.budget}</h4></li>
              <li><h4 className="font-weight-light  my-5 "><b>Address:</b> {regionalOffice.rlocation}</h4></li>
              <li><h4 className="font-weight-light  my-5"><b>Email:</b> {regionalOffice.remail}</h4></li>
              <li><h4 className="font-weight-light  my-5"><b>Contact:</b> {regionalOffice.rcontact}</h4></li>
            </ul>
            <div className="p-5">
                <RegionalEvents rId={regionalOffice.rid}/>
            </div>
          </div>
    
    <BarChart1/>
    <Footer/>
  </div>
  );
}

export default RegionalOfficePage;