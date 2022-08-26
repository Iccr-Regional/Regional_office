import React from "react";
import { Consumer } from "./context";
import {Link} from "react-router-dom"; 
import Like from "./Like";
import AdminNavigation from "./AdminNavigation";
import Footer from "./footer";
import {useLocation} from "react-router-dom";
function AdminFutureEventPage(props) {
  const eid=props.match.params.id;
  const events=useLocation().state?.event;
  console.log(events,"ADMIN");
        return (
          <div>
            <AdminNavigation/>
          <div className="container py-5 my-5 markdown">
            
            <div className="row justify-content-center">
            <Link to={{  pathname: "/admin/editevent",  state: events }}>
                <button
                      type="submit"
                      className="btn btn-dark align-items-right"
                      style={{ backgroundColor: "black" }}
                    >
                      Edit
                    </button>
                </Link>
              <div className="col-12 col-md-6 ">
                <img src={events.eimg} alt={events.ename} className="w-100" />
              </div>
            </div>
            <h1 className="font-weight text-center sizing-1">Event Name</h1>
            <h1 className="font-weight-light text-center  sizing-1">{events.ename}</h1>
            <br/>
            <h1 className="font-weight text-center sizing-1">Organised By</h1>
            <h1 className="font-weight-light text-center   sizing-1">{events.rname}</h1>
            <br/>
            <h1 className="text-center sizing-1">About</h1>
            <h1 className="font-weight-light text-left   sizing-2">{events.edesc}</h1>
            <h1 className="font-weight-light text-center   sizing-2">Date of the Event</h1>
            <h1 className="font-weight-light text-center   sizing-1">{events.edate}</h1>
            <h1 className="font-weight-light text-center   sizing-2">Time of the Event</h1>
            <h1 className="font-weight-light text-center   sizing-1">{events.etime}</h1>
            <div className="card shadow bg-light h-100">
               <div className="card-body">
                 <p className="text-center">
                  <a target="_blank"  href="https://www.google.com/maps/place/Arctic+Pixel+Digital+Solutions/@63.6741553,-164.9587713,4z/data=!3m1!4b1!4m5!3m4!1s0x5133b2ed09c706b9:0x66deacb5f48c5d57!8m2!3d64.751111!4d-147.3494442">Location URL</a>
                  </p>
                </div>
             </div>
          </div>
          <Footer/>
          </div>
        );
      }

export default AdminFutureEventPage;