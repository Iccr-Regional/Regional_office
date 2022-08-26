import React from "react";
import { Consumer } from "./context";
import Like from "./Like";
import Navigation from "./Navigation";
import Footer from "./footer";
import { Link } from "react-router-dom";


import { useLocation } from 'react-router-dom';
function PastEventPage(props) {
  const eid = props.match.params.id;
  console.log(eid);
  const events = useLocation().state?.event;
  console.log(events)
  return (
          <div>

          <Navigation/>
          <div className="container py-5 my-5 markdown">
            <Like/>
            <Link to={{  pathname: "/editevent",  state: events }}>
                <button
                      type="submit"
                      className="btn btn-dark align-items-right"
                      style={{ backgroundColor: "black" }}
                    >
                      Edit
                    </button>
                </Link>
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 ">
                <img src={events.eimg} alt={events.ename} className="w-100" />
              </div>
            </div>
            <h1 className="font-weight-light text-center my-5">Event Name: {events.ename}</h1>
            <h1 className="font-weight-light text-center my-5">Organized by: {events.rname}</h1>
            <h1 className="font-weight-light text-center my-5">About: {events.edesc}</h1>
            <h1 className="font-weight-light text-center my-5">No.of students Participated: {events.enp}</h1>
            <h1 className="font-weight-light text-center my-5">Winner: {events.ewin}</h1>
            <h1 className="font-weight-light text-center my-5">Date: {events.edate}</h1>
            <h1 className="font-weight-light text-center my-5">Time: {events.etime}</h1>
          </div>
          <Footer/>
          </div>
        );
  //     }}
  //   </Consumer>
  // );
}

export default PastEventPage;