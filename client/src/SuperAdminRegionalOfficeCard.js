import React from "react";
import { Link } from "react-router-dom";

function SuperAdminRegionalOfficeCard(props) {
  const { rid, rname, rimage } = props.regionalOffice;
  console.log(props.regionalOffice);
  return (
    <div className="card shadow h-100 gradiating-1">
      <img className="card-img-top" src={rimage} alt={rname} height='200px' />
      <div className="card-body">
        <h4 className="card-title">{rname}</h4>
        <Link to={{pathname:`/superadmin/regionaloffice/${rid}`, state: {office: props.regionalOffice}}} className="stretched-link"></Link>
      </div>
    </div>
  );
}

export default SuperAdminRegionalOfficeCard;