import React from "react";
import { Consumer } from "./context";
import PastEventCard from "./PastEventCard";

function SortedByLikes(props) {
  return (
    <Consumer>
      {(value) => {
        const sortedPastEvents  = props.location.state;
        const sortedByLikes=sortedPastEvents;
        //console.log(sortedPastEvents);
        //const sortedByLikes =sortedPastEvents.sort((a, b) => (b.elikes) - (a.elikes));
        for(let i=0;i<sortedByLikes.length;i+=1){
          for(let j=i;j<sortedByLikes.length;j+=1){
             if(sortedByLikes[i].elikes<sortedByLikes[j].likes){
               let temp=sortedByLikes[i];
               sortedByLikes[i]=sortedByLikes[j];
               sortedByLikes[j]=temp;
             }
          }
        }
        //console.log(sortedByLikes);
        return (
          <div className="container text-center my-5 py-5">
            <h1 className="font-weight-light py-5">
              Events sorted by likes
            </h1>
            <div className="row my-4 pt-4">
              {sortedByLikes.map((pastEvent) => (
                <div key={pastEvent.eid} className="col-12 col-md-6 py-3">
                  <PastEventCard pastEvent={pastEvent} />
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default SortedByLikes;