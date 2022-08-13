import React from "react";
import AdminNavigation from "./AdminNavigation";
import { Consumer } from "./context";
import CurrentEventCard from "./CurrentEventCard";

function AdminAllCurrentEvents(props) {
  return (
    <Consumer>
      {(value) => {
        const sortedCurrentEvents  = props.location.state;
        return (
          <div>
          <AdminNavigation/>
          <div className="container text-center my-5 py-5">
            <h1 className="font-weight-light py-5">
              All Current Events
            </h1>
            <div className="row my-4 pt-4">
              {sortedCurrentEvents.map((currentEvent) => (
                <div key={currentEvent.eid} className="col-12 col-md-6 py-3">
                  <CurrentEventCard currentEvent={currentEvent} />
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

export default AdminAllCurrentEvents;
