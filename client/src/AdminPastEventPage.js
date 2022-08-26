import React from "react";
import { Consumer } from "./context";
import {Link} from "react-router-dom"; 
import Like from "./Like";
import AdminNavigation from "./AdminNavigation";
import Footer from "./footer";
import {useLocation} from "react-router-dom";
function AdminPastEventPage(props) {
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
              </div>
                <h1 className="display-1 text-center my-5">{events.ename}</h1><br/>
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 ">
                <img src={events.eimg} alt={events.ename} className="w-100" />
              </div>
            </div>
             <h1 className="font-weight-light text-left my-5"><b>About:</b>{events.edesc}</h1>
            <h1 className="font-weight-light  my-5"><b>No.of Boys Participated: </b>{events.ebp}</h1>
            <h1 className="font-weight-light  my-5"><b>No.of Girls Participated: </b>{events.egp}</h1>
            <h1 className="font-weight-light  my-5"><b>Winner:</b> {events.ewin}</h1>
            <h1 className="font-weight-light  my-5"><b>Budget:</b> {events.ebudget}</h1>
            <h1 className="font-weight-light  my-5"><b>Date: </b>{events.edate}</h1>
            <h1 className="font-weight-light  my-5"><b>Time:</b> {events.etime}</h1>
            <div style={{ display: 'flex',justifyContent: 'center' }}>
            <iframe width="50%" height="420" src={events.evid} title="United We Fight" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
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

export default AdminPastEventPage;