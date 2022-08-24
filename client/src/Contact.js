import React from 'react'
import Footer from './footer';
import Navigation from './Navigation';

function Contact() {
  return (
    <div>
        {/* <video loop autoPlay muted id="bg-video">
          <source src={require("./video.mp4.mp4")} type="video/mp4"/>
        </video> */}
        <Navigation/>
        <div className='colours-1 text-info'>
         <br/><br/>
         <br/><br/> 
        <h3>Contact No:</h3><h5>9876543210</h5>
        <br/><br/>
        <h3>Email</h3>
        <h5>iccr@helpdesk.in</h5>
        <br/><br/>
        <br/><br/>
        </div>
        <Footer/>
    </div>
  );
}
export default Contact;