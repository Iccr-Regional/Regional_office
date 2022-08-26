import React from "react";
import { Link } from "react-router-dom";

function AdminCurrentEventCard(props) {
  const { eid, ename, eimg, edate, etime } = props.currentEvent;
  return (
    <div className="card shadow bg-light h-100">
      <img className="card-img-top" src={eimg} alt={ename} />
      <div className="card-body">
        <h4 className="card-title">{ename}</h4>
        <p className="card-text">{edate} {etime}</p>
        <Link to={{pathname:`/admin/currentevent/${eid}`,state:{event:props.currentEvent}}} className="stretched-link"></Link>
      </div>
    </div>
  );
}

export default AdminCurrentEventCard;