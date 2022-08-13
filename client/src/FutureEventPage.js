import React from "react";
import { Consumer } from "./context";
import Navigation
from "./Navigation";
function FutureEventPage(props) {
  return (
    <Consumer>
      {(value) => {
        const { events } = value;
        const eid = props.match.params.id;
        const futureEvent = events.filter((futureEvent) => futureEvent.eid == eid)[0];
        const { eimg, ename, rname, edesc, edate, etime } = futureEvent;
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
            <h1 className="font-weight-light text-center my-5">{edate} {etime}</h1>
          </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default FutureEventPage;
