import React from "react";
import { Consumer } from "./context";
import Like from "./Like";
import Navigation from "./Navigation";
import Footer from "./footer";
function PastEventPage(props) {
  return (
    <Consumer>
      {(value) => {
        const { events } = value;
        const eid = props.match.params.id;
        console.log(typeof eid);
        const pastEvent = events.filter((pastEvent) => pastEvent.eid == eid)[0];
        const {eimg,ename,edesc,etime,edate,rname,enp,ewin,elikes} = pastEvent;
        return (
          <div>

          <Navigation/>
          <div className="container py-5 my-5 markdown">
            <Like/>
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 ">
                <img src={eimg} alt={ename} className="w-100" />
              </div>
            </div>
            <h1 className="font-weight-light text-center my-5 sizing-1">Event Name: {ename}</h1>
            <h1 className="font-weight-light text-center my-5 sizing-2">Organized by: {rname}</h1>
            <h1 className="font-weight-light text-center my-5 sizing-2">About<br></br> {edesc}</h1>
            <h1 className="font-weight-light text-center my-5 sizing-2">No.of students Participated: {enp}</h1>
            <h1 className="font-weight-light text-center my-5 sizing-2">Winner: {ewin}</h1>
            <h1 className="font-weight-light text-center my-5 sizing-2">Date: {edate}</h1>
            <h1 className="font-weight-light text-center my-5 sizing-2">Time: {etime}</h1>
            <h1 className="font-weight-light text-center my-5 sizing-2">Likes: {elikes}</h1>
          </div>
          <Footer/>
          </div>
        );
      }}
    </Consumer>
  );
}

export default PastEventPage;
