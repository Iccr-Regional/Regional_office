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
      <div className="justify-content-center m1">
        <img src={regionalOffice.rimage} alt={regionalOffice.rname} className="w-100" />
      </div>
      <h1 className="font-weight-light text-center my-5">{regionalOffice.rname}</h1>
      <h1 className="font-weight-light  text-center my-5">Address: {regionalOffice.rlocation}</h1>
      <p className="font-weight-light text-center my-5">{regionalOffice.rdesc}</p>
      <div className="p-5">
        <RegionalEvents rId={regionalOffice.rid} />
      </div>
    </div>
       <BarChart1 name={name}/>
    <Footer/>
  </div>
  );
}

export default RegionalOfficePage;
