import React from "react";
import SuperAdminNavigation from "./SuperAdminNavigation";
import { Consumer } from "./context";
import SuperAdminFutureEventCard from "./SuperAdminFutureEventCard";

function SuperAdminAllFutureEvents(props) {
  return (
    <Consumer>
      {(value) => {
        const sortedFutureEvents  = props.location.state;
        return (
          <div>
          <SuperAdminNavigation/>
          <div className="container text-center my-5 py-5">
            <h1 className="font-weight-light py-5">
              All Upcoming Events
            </h1>
            <div className="row my-4 pt-4">
              {sortedFutureEvents.map((futureEvent) => (
                <div key={futureEvent.eid} className="col-12 col-md-6 py-3">
                  <SuperAdminFutureEventCard FutureEvent={futureEvent} />
                </div>
              ))}
            </div>  
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default SuperAdminAllFutureEvents;