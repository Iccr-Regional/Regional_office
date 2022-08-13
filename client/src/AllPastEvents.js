import React from "react";
import { Consumer } from "./context";
import PastEventCard from "./PastEventCard";

function AllPastEvents(props) {
  return (
    <Consumer>
      {(value) => {
        const sortedPastEvents  = props.location.state;
        return (
          <div className="container text-center my-5 py-5">
            <h1 className="font-weight-light py-5">
              All Past Events
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
