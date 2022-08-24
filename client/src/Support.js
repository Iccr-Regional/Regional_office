import React from "react";
import Footer from "./footer";
import Navigation from "./Navigation";
function Support(){
    return(
        <div>
        <div>
            {/* <video loop autoPlay muted id="bg-video">
                <source src={require("./video.mp4.mp4")} type="video/mp4"/>
            </video> */}
            <Navigation/>
             <div className="py-5 text-info text-center">
                <br/><br></br>
                <h1>Which Type of activities are conducted?</h1>
                <br/><br/>
                <h3>Yoga,Dance,etc</h3>
            </div>
        </div>
        <Footer/>
        </div>
    );
}
export default Support;