import React from "react";
import { Consumer } from "./context";
import Navigation from "./Navigation";
function CurrentEventPage(props) {
  return (
    <Consumer>
      {(value) => {
        const { events } = value;
        const eid = props.match.params.id;
        const currentEvent = events.filter((currentEvent) => currentEvent.eid == eid)[0];
        const { eimg, ename, rname, edesc, edate, etime } = currentEvent;
        return (
          <div>

          <Navigation/>
          <div className="container py-5 my-5 markdown">
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 ">
                <img src={eimg} alt={ename} className="w-100" />
              </div>
            </div>
            <h1 className="font-weight-light text-center my-5">{ename}</h1>
            <h1 className="font-weight-light text-center my-5">{rname}</h1>
            <h1 className="font-weight-light text-center my-5">{edesc}</h1>
            <h1 className="font-weight-light text-center my-5">{edate}</h1>
            <h1 className="font-weight-light text-center my-5">{etime}</h1>
          </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default CurrentEventPage;
