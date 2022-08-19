import React from "react";
function background(){
    return(
        <div>
            <video loop autoPlay muted id="bg-video">
                <source src={require("./video.mp4.mp4")} type="video/mp4"/>
            </video>
        </div>
    );
}
export default background;