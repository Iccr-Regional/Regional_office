import React from 'react'
import Footer from './footer';
import Navigation from './Navigation';
import Map1 from "./Map1";
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
         <div className="py-5 text-info text-center">
                <br/><br></br>
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                <Map1/>
                   </div>
                </div>
                </div>
        <p>Address : ICCR ( Indian Council for Cultural Relations)
Azad Bhawan Rd, IP Estate, New Delhi, Delhi 110002
Email:grievance[at]iccr[dot]gov[dot]in
Contact Number : +91-11-23379309 </p>

<p>Web Information Manager Details
<p>Name: Shri Angshuman Pal</p>
<p>Designation: Programme Officer</p>
<p>Email:po-egit@iccr.gov.in</p>
<p>Contact Number : +91 11 2337 9638 Extn 3404</p>
</p> 
        </div>
        <Footer/>
    </div>
    </div>
  );
}
export default Contact;