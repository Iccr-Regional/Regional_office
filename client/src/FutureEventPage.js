import React from "react";
import { Consumer } from "./context";
import Like from "./Like";
import Navigation from "./Navigation";
import Footer from "./footer";

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
            <Like/>
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 ">
                <img src={events.eimg} alt={events.ename} className="w-100" />
              </div>
            </div>
            <h1 className="font-weight-light text-center my-5">{events.ename}</h1>
            <h1 className="font-weight-light text-center my-5">{events.rname}</h1>
            <h1 className="font-weight-light text-center my-5">{events.edesc}</h1>
            <h1 className="font-weight-light text-center my-5">{events.edate} {events.etime}</h1>
          </div>
          <Footer/>
          </div>
        );
 //     }}
   // </Consumer>
 // );
}

export default FutureEventPage;
