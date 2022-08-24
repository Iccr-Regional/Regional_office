import Spinner from "react-spinkit";
import React from "react";
const loading=({history})=> {
    setTimeout(()=>{
        history.push('/home');
    },4000)
   return (
      <div>
            <video loop autoPlay muted id="bg-video">
                <source src={require("./video2.mov")} type="video/mp4"/>
            </video>
      <div
         style={{
            display: "flex",
            marginTop: "350px",
            alignItems:"center",
            justifyContent:"center",
            }}>
         {/* <Spinner name="double-bounce" style={{ width: 100, height: 100 }} /> */}
         {/* <Spinner name="circle" style={{ width: 100, height: 100 }} className="align-items-center" /> */}
          <Spinner name="cube-grid" style={{ width: 100, height: 100 }} />
         {/*<Spinner name="wave" color="coral" style={{ width: 100, height: 100 }} />
         <Spinner name="three-bounce" style={{ width: 100, height: 100 }} />
         <Spinner name="wandering-cubes" style={{ width: 100, height: 100 }} />
         <Spinner name="chasing-dots" style={{ width: 100, height: 100 }} />
         <Spinner name="rotating-plane" style={{ width: 100, height: 100 }} />
         <Spinner name="wordpress" style={{ width: 100, height: 100 }} />
         <Spinner name="ball-grid-beat" style={{ width: 100, height: 100 }} /> */}
      </div>
      </div>
   );
}
export default loading;