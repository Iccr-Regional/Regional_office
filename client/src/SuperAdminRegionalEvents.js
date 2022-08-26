import React from "react";
import SuperAdminPastEventCard from "./SuperAdminPastEventCard";
import SuperAdminFutureEventCard from "./SuperAdminFutureEventCard";
import CurrentEventCard from "./CurrentEventCard";
import { Link } from "react-router-dom";
import { Consumer } from "./context";
import image1 from "./image1.png";
import {useEffect,useState} from "react";
import Axios from "axios";

function SuperAdminRegionalEvents(props) {
  const [events,setEvents]=useState([]);
  const Display = ()=>{
         Axios.get('http://localhost:3001/getEvents').then((response)=>{
           console.log(response.data);
           setEvents(response.data);
         //  console.log("**",events);
         }).catch(err=>{
           console.log(err)
         });
        };
        useEffect(()=>{
          Display();
        },[]);
  return (
    <Consumer>
      {(value) => {
        const { rId} =props;
        //const { events } =value;
        console.log(events);
        //const eventsArr = events.filter((roEvent) => roEvent.rid == rId);
        const eventsArr=[];
        for(let i=0;i<events.length;i+=1){
          console.log(typeof events[i].rid);
          console.log( typeof parseInt(rId));
         // eventsArr.push(events[i]);
          console.log(eventsArr);
          console.log(parseInt(rId),"JAIIIIIIIIIIIIIIII");
          if(events[i].rid==Number(rId)){
             eventsArr.push(events[i]);
          }
        }
        console.log(eventsArr,"Helllo this is events arr");
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
          console.log(sortedCurrentEvents,"Current Events");
          console.log(sortedFutureEvents,"Future Events");
          console.log(sortedPastEvents,"Past Events");             
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
                  <SuperAdminFutureEventCard futureEvent={futureEvent} />
                </div>
              ))}
            </div>
          </div>
            <div className="my-5 text-right">
              <Link to={{  pathname: "/superadmin/allfutureevents",  state: sortedFutureEvents }}>
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
                            <SuperAdminPastEventCard pastEvent={pastEvent} />
                        </div>
                    ))}
                </div>
                <div className="my-5 text-right">
                <Link to={{  pathname: "/superadmin/allpastevents",  state: sortedPastEvents }}>
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

export default SuperAdminRegionalEvents;