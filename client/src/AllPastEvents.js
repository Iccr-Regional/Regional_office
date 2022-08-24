import React from "react";
import { Consumer } from "./context";
import PastEventCard from "./PastEventCard";
import {Link} from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
function AllPastEvents(props) {
  return (
    <Consumer>
      {(value) => {
        let sortedPastEvents  = props.location.state;
        //sortedPastEvents =sortedPastEvents.sort((a, b) => (b.edate) - (a.edate));
        return (
          <div className="container text-center my-5 py-5">
            <NavDropdown title="Sort by" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/allpasteventssortedbylikes"><Link to={{  pathname: "/allpasteventssortedbylikes",  state: sortedPastEvents }}>Likes</Link></NavDropdown.Item>
              <NavDropdown.Item href="/allpastevents">
              <Link to={{  pathname: "/allpastevents",  state: sortedPastEvents }}>date</Link>
              </NavDropdown.Item>
              
            </NavDropdown>
            <h1 className="font-weight-light py-5">
              Past Events
            </h1>
            <div className="row my-4 pt-4">
              {sortedPastEvents.map((pastEvent) => (
                <div key={pastEvent.eid} className="col-12 col-md-6 py-3">
                  <PastEventCard pastEvent={pastEvent} />
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default AllPastEvents;
