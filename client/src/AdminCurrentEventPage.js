import React from "react";
import { Consumer } from "./context";
import Footer from "./footer";
import Like from "./Like";
import {Link} from "react-router-dom";
import AdminNavigation from "./AdminNavigation";
import {useEffect,useState} from "react";
import Axios from "axios";
import { useLocation } from 'react-router-dom';
function AdminCurrentEventPage(props) {
  const eid = props.match.params.id;
  console.log(eid);
  const events = useLocation().state?.event;
  console.log(events)
 // const currentEvent = events.filter((currentEvent) => currentEvent.eid === eid)[0];
 // const { eimg, ename, rname, edesc, edate, etime } = currentEvent;

  return (
    
          <div>

          <AdminNavigation/>
          <div className="container py-5 my-5 markdown">
            <div className="row justify-content-center">
            <Link to={{  pathname: "/admin/editevent",  state: events }}>
                <button
                      type="submit"
                      className="btn btn-dark align-items-right"
                      style={{ backgroundColor: "black" }}
                    >
                      Edit
                    </button>
                </Link>
                </div>
                <h1 className="dispaly-1 text-center my-5">{events.ename}</h1>
              <div className="row justify-content-center">
              <div className="col-12 col-md-6 ">
                <img src={events.eimg} alt={events.ename} className="w-100" />
              </div>
            </div>
            <h1 className="font-weight-light text-left my-5">{events.edesc}</h1>
            <h1 className="font-weight-light  my-5"><b>Budget:</b> {events.ebudget}</h1>
            <h1 className="font-weight-light my-5"><b>Organised On:</b>{events.edate}</h1>
            <h1 className="font-weight-light  my-5"><b>Start time:</b> {events.etime}</h1>
            <div style={{ display: 'flex',justifyContent: 'center' }}>
            <iframe width="50%" height="420" src={events.evid} title="United We Fight" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          </div>
          <Footer/>
          </div>
        );
}
export default AdminCurrentEventPage;