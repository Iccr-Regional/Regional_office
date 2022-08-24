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
        const { rId} =props;
        const { events } =value;
        //console.log(events);
        //const eventsArr = events.filter((roEvent) => roEvent.rid == rId);
        const eventsArr=[];
        for(let i=0;i<events.length;i+=1){
          //console.log(rId);
          //eventsArr.push(events[i]);
          //console.log(eventsArr);
          if(events[i].rid==rId){
            eventsArr.push(events[i]);
          }
        }
        //console.log(eventsArr);
        //const sortedActivities = eventsArr.sort((a, b) => new Date(b.edate) - new Date(a.edate));
        var sortedActivities=eventsArr;
        for(let i=0;i<sortedActivities.length;i+=1){
          for(let j=i;j<sortedActivities.length;j+=1){
             if(sortedActivities[i].edate<sortedActivities[j].edate){
               let temp=sortedActivities[i];
               sortedActivities[i]=sortedActivities[j];
               sortedActivities[j]=temp;
             }
          }
        }
        for(let i=0;i<sortedActivities.length;i+=1){
          for(let j=i;j<sortedActivities.length;j+=1){
            if(sortedActivities[i].edate==sortedActivities[j].edate){
              if(sortedActivities[i].etime<sortedActivities[j].etime){
                let temp=sortedActivities[i];
                sortedActivities[i]=sortedActivities[j];
                sortedActivities[j]=temp;
              }
            }
          }
        }     
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
            <h1 className="font-weight-light sizing-1">
                Upcoming
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
              <Link to={{  pathname: `/regionaloffice/${rId}/allfutureevents`,  state: sortedFutureEvents }}>
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
                <h1 className="font-weight-light sizing-1">
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
                <Link to={{  pathname: `/regionaloffice/${rId}/allpastevents`,  state: sortedPastEvents }}>
                <button
                      type="submit"
                      className="btn btn-dark align-items-right"
                      style={{ backgroundColor: "black" }}
                    >
                      See all past events
                    </button>
                </Link>    
                {/* <Link to={{  pathname: "/allpasteventssortedbylikes",  state: sortedPastEvents }}>
                <button
                      type="submit"
                      className="btn btn-dark align-items-right"
                      style={{ backgroundColor: "black" }}
                    >
                      Sorted past events
                    </button>
                </Link>           */}
                </div>
          </div>
            
           </>
          
        );
      }}
    </Consumer>
  );
}

export default RegionalEvents;

