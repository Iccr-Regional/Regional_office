import React from "react";
import { Consumer } from "./context";
import Footer from "./footer";
import Like from "./Like";
import Navigation from "./Navigation";
import {useEffect,useState} from "react";
import Axios from "axios";
import { useLocation } from 'react-router-dom';
function CurrentEventPage(props) {
  const eid = props.match.params.id;
  console.log(eid);
  const events = useLocation().state?.event;
  console.log(events)
 // const currentEvent = events.filter((currentEvent) => currentEvent.eid === eid)[0];
 // const { eimg, ename, rname, edesc, edate, etime } = currentEvent;

  return (
    
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
            <h1 className="font-weight-light text-center my-5">{events.edate}</h1>
            <h1 className="font-weight-light text-center my-5">{events.etime}</h1>
          </div>
          <Footer/>
          </div>
        );
      
 
}

export default CurrentEventPage;