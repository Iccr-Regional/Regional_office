import React from "react";
import CurrentEventCard from "./CurrentEventCard";
import { Link } from "react-router-dom";
import { Consumer } from "./context";
import {useEffect,useState} from "react";
import Axios from "axios";
function AdminCurrentEvents(props) {
  const [events,setEvents]=useState([]);
  const Display = ()=>{
    Axios.get('http://localhost:3001/getEvents').then((response)=>{
      console.log(response.data);
      setEvents(response.data);
    }).catch(err=>{
      console.log(err)
    });
  };

 useEffect(()=>{
  Display();
 },[])
  return (
    <Consumer>
      {(value) => {
       // const { events } =value;
        const sortedActivities = events.sort((a, b) => new Date(b.edate) - new Date(a.edate));  
        const sdate=new Date();
        sdate.setHours(0, 0, 0, 0);
        const sortedCurrentEvents=[];
        for(let i in sortedActivities){
          let dt=new Date(sortedActivities[i].edate);
          dt.setHours(0,0,0,0);
          if (dt.getTime() == sdate.getTime()){
              sortedCurrentEvents.push(sortedActivities[i]);
          }             
        }
        return (
          <>
        <div className="container text-center my-5">
            <h1 className="font-weight-light py-5">Current Events</h1>
            <div className="row d-flex justify-content-around my-5 pt-3">
               {sortedCurrentEvents.slice(0,2).map((currentEvent) => (
                  <div key={currentEvent.eid} className="col-12 col-md-5 my-2">
                  <CurrentEventCard currentEvent={currentEvent} />
            </div>
            ))}
        </div>
        <div className="my-5 text-right">
            <Link to={{  pathname: "/admin/allcurrentevents",  state: sortedCurrentEvents }} className="text-dark text-right">
            <button
                type="submit"
                className="btn btn-dark align-items-right"
                style={{ backgroundColor: "black" }}
            >
                See all current events
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

export default AdminCurrentEvents;