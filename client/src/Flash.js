import React from 'react';
import { Consumer } from "./context";
function Flash() {
  return (
    <Consumer>
      {(value) => {
        const {regionalOffices, events}=value;
        const deletedROArr = regionalOffices.filter((ro) => ro.rstatus == 'n');
        const deletedEventsArr=events.filter((e)=>e.estatus=='n');
        return (
          <div className="container-fluid my-5 imaging-1">
          <div className="row">
              <div className="col-md-12">
              <div className="d-flex justify-content-between align-items-center breaking-news">
                      <div className="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-danger py-2 text-white px-1 news"><span className="d-flex align-items-center">&nbsp;Flash News</span></div>
                      <div className='d-flex'>
                      <marquee className="news-scroll" behavior="scroll" direction="left" onMouseOver={()=>this.stop()} onMouseOut={()=>this.start()}> 
                      {deletedROArr.map((devent) => (
                       <>
                      <i className='fas fa-circle siz'></i><a href="#">{devent.rname} is deleted</a>
                      </>
                      ))}
                    {deletedEventsArr.map((devent) => (
                       <>
                      <i className='fas fa-circle siz'></i><a href="#">{devent.ename} organised by {devent.rname} is cancelled</a>
                      </>
                     ))}
                  </marquee>
              </div>
              
              </div>
              </div>  
          </div>
          </div>
        );
      }}
    </Consumer>
  );
}
export default Flash;