import React from "react";
import PastEventCard from "./PastEventCard";
import FutureEventCard from "./FutureEventCard";
import CurrentEventCard from "./CurrentEventCard";
import { Link } from "react-router-dom";
import { Consumer } from "./context";
import image1 from "./image1.png";
function RegionalEvents(props) {
  return (
    <Consumer>
      {(value) => {
        const { rOName} =props;
        const { events } =value;
        const eventsArr = events.filter((roEvent) => roEvent.rname == rOName);
        const sortedActivities = eventsArr.sort((a, b) => new Date(b.edate) - new Date(a.edate));  
        const sdate=new Date();
        sdate.setHours(0, 0, 0, 0);
        const sortedPastEvents=[];
        const sortedFutureEvents=[];
        const sortedCurrentEvents=[];
        for(let i in sortedActivities){
          let dt=new Date(sortedActivities[i].edate);
          dt.setHours(0,0,0,0);
          if (dt.getTime() < sdate.getTime()){
              sortedPastEvents.push(sortedActivities[i]);
          }
          else if (dt.getTime() > sdate.getTime()){
              sortedFutureEvents.push(sortedActivities[i]);
          }
          else{
              sortedCurrentEvents.push(sortedActivities[i]);
          }             
        }
        return (
          <>
  
          
          <div>
            <div className="container text-center my-5">
            <h1 className="font-weight-light">
                Future Events
            </h1>
            <div className="row d-flex justify-content-around my-5 pt-3">
              {sortedFutureEvents.slice(0,2).map((futureEvent) => (
                <div key={futureEvent.eid} className="col-12 col-md-5 my-2">
                  <FutureEventCard futureEvent={futureEvent} />
                </div>
              ))}
            </div>
          </div>
            <div className="my-5 text-right">
              <Link to={{  pathname: "/allfutureevents",  state: sortedFutureEvents }}>
              <button
                      type="submit"
                      className="btn btn-dark align-items-right"
                      style={{ backgroundColor: "black" }}
                    >
                      See all future events
                    </button>
                </Link>
            </div>
            </div>

          <div className="container text-center my-5">
                <h1 className="font-weight-light">
                    Past Events
                </h1>
                <div className="row d-flex justify-content-around my-5 pt-3">
                    {sortedPastEvents.slice(0,2).map((pastEvent) => (
                        <div key={pastEvent.eid} className="col-12 col-md-5 my-2">
                            <PastEventCard pastEvent={pastEvent} />
                        </div>
                    ))}
                </div>
                <div className="my-5 text-right">
                <Link to={{  pathname: "/allpastevents",  state: sortedPastEvents }}>
                <button
                      type="submit"
                      className="btn btn-dark align-items-right"
                      style={{ backgroundColor: "black" }}
                    >
                      See all past events
                    </button>
                </Link>              
                </div>
          </div>
            
           </>
          
        );
      }}
    </Consumer>
  );
}

export default RegionalEvents;

