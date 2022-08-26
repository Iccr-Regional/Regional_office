import React from "react";
import { Consumer } from "./context";
import AdminFutureEventCard from "./AdminFutureEventCard";

function AdminAllFutureEvents(props) {
  return (
    <Consumer>
      {(value) => {
        const sortedFutureEvents  = props.location.state;
        return (
          <div className="container text-center my-5 py-5">
            <h1 className="font-weight-light py-5">
              All Future Events
            </h1>
            <div className="row my-4 pt-4">
              {sortedFutureEvents.map((futureEvent) => (
                <div key={futureEvent.eid} className="col-12 col-md-6 py-3">
                  <AdminFutureEventCard futureEvent={futureEvent} />
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default AdminAllFutureEvents;