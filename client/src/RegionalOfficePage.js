import React from 'react'
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import RegionalEvents from "./RegionalEvents";

const RegionalOfficePage = (props) => {
  const id = props.match.params.id;
  console.log(id);
  const regionalOffice = useLocation().state?.office;

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
        <RegionalEvents rOName={regionalOffice.rname} />
      </div>
    </div>
  </div>
  )
}

export default RegionalOfficePage;
