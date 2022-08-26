import React from "react";
import { Consumer } from "./context";
import Like from "./Like";
import Navigation from "./Navigation";
import Footer from "./footer";
import { Link } from "react-router-dom";

import { useLocation } from 'react-router-dom';
function FutureEventPage(props) {
  const eid = props.match.params.id;
  console.log(eid);
  const events = useLocation().state?.event;
  console.log(events)
  //const futureEvent = events.filter((futureEvent) => futureEvent.eid == eid)[0];
   //const { eimg, ename, rname, edesc, edate, etime } = futureEvent;
  return (
   // <Consumer>
     // {(value) => {
        // const { events } = value;
        // const eid = props.match.params.id;
        // const futureEvent = events.filter((futureEvent) => futureEvent.eid == eid)[0];
        // const { eimg, ename, rname, edesc, edate, etime } = futureEvent;
     //   return (
          <div>
            <Navigation/>
          <div className="container py-5 my-5 markdown">
               <h1 className="display-1 text-center my-5">{events.ename}</h1>
              <div className="col-12 col-md-6 ">
                <img src={events.eimg} alt={events.ename} className="w-100" />
              </div>
            <h1 className="font-weight-light text-left my-5"><b>About:</b>{events.edesc}</h1>
            <h1 className="font-weight-light my-5"><b>Budget:</b> {events.ebudget}</h1>
            <h1 className="font-weight-light  my-5"><b>Date:</b>{events.edate}</h1>
            <h1 className="font-weight-light  my-5"><b>Time:</b> {events.etime}</h1>
            <div style={{ display: 'flex',justifyContent: 'center' }}>
            <iframe width="50%" height="420" src={events.evid} title="United We Fight" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          </div>
          <Footer/>
          </div>
        );
 //     }}
   // </Consumer>
 // );
}

export default FutureEventPage;