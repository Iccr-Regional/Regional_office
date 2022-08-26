import React from "react";
import Footer from "./footer";
import Like from "./Like";
import Navigation from "./Navigation";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
function CurrentEventPage(props) {
  const eid = props.match.params.id;
  console.log(eid);
  const events = useLocation().state?.event;
  console.log(events)
 
  return (
          <div>

          <Navigation/>
          <div className="container py-5 my-5 markdown">
             
               <h1 className="display-1 text-center my-5">{events.ename}</h1>
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 ">
                <img src={events.eimg} alt={events.ename} className="w-100" />
              </div>
            <h1 className="font-weight-light text-left my-5"><b>About:</b>{events.edesc}</h1>
            <h1 className="font-weight-light  my-5"><b>Budget:</b> {events.ebudget}</h1>
            <h1 className="font-weight-light  my-5"><b>Date:</b>{events.edate}</h1>
            <h1 className="font-weight-light  my-5"><b>Time:</b> {events.etime}</h1>
            <div style={{ display: 'flex',justifyContent: 'center' }}>
            <iframe width="50%" height="420" src={events.evid} title="United We Fight" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          </div>
          </div>
          <Footer/>
          </div>
        );
    
}

export default CurrentEventPage;