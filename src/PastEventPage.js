import React from "react";
import { Consumer } from "./context";

function PastEventPage(props) {
  return (
    <Consumer>
      {(value) => {
        const { events } = value;
        const eid = props.match.params.id;
        const pastEvent = events.filter((pastEvent) => pastEvent.eid == eid)[0];
        const {eimg,ename,edesc,etime,edate,rname,enp,ewin} = pastEvent;
        return (
          <div className="container py-5 my-5 markdown">
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 ">
                <img src={eimg} alt={ename} className="w-100" />
              </div>
            </div>
            <h1 className="font-weight-light text-center my-5">Event Name: {ename}</h1>
            <h1 className="font-weight-light text-center my-5">Organized by: {rname}</h1>
            <h1 className="font-weight-light text-center my-5">About: {edesc}</h1>
            <h1 className="font-weight-light text-center my-5">No.of students Participated: {enp}</h1>
            <h1 className="font-weight-light text-center my-5">Winner: {ewin}</h1>
            <h1 className="font-weight-light text-center my-5">Date: {edate}</h1>
            <h1 className="font-weight-light text-center my-5">Time: {etime}</h1>
          </div>
        );
      }}
    </Consumer>
  );
}

export default PastEventPage;
