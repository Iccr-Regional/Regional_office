import React from "react";
import Footer from "./footer";
import AdminNavigation from "./AdminNavigation";
function Support(){
    return(
        <div>
        <div>
            {/* <video loop autoPlay muted id="bg-video">
                <source src={require("./video.mp4.mp4")} type="video/mp4"/>
            </video> */}
            <AdminNavigation/>
             <div className="py-5 px-5 text-center">
                <br/><br/>
                <h3 className="font-weight text-left">Which Type of activities are conducted?</h3>
                <h3 className="font-weight-light text-left">Yoga,Dance,etc</h3>
                <h3 className="font-weight text-left">How many scholarships does ICCR provide to foreign students?</h3>
                <h3 className="font-weight-light text-left">Indian Council for Cultural Relations administers various scholarship programs annually and awards about 3000+ scholarships under 26 different schemes to foreign students from about 140 countries.</h3>
                <h3 className="font-weight text-left">What is your contact number for general queries?</h3>
                <h3 className="font-weight-light text-left">For any queries please visit contact page.</h3>
                <h3 className="font-weight text-left"> Can I register at the venue?</h3>
                <h3 className="font-weight-light text-left">Yes, you can register directly at the venue.</h3>
                <h3 className="font-weight text-left">what is the age restriction for ICCR recruitment?</h3>
                <h3 className="font-weight-light text-left">18-35 years as per 2020.</h3>
                <h3 className="font-weight text-left">what is the selection process of the ICCR?</h3>
                <h3 className="font-weight-light text-left">ICCR conducts a combined competitive exam for the preliminary selection of the candidates. Qualifying candidates are notified through the results released at the official website of the Council.</h3>
                <h3 className="font-weight text-left">Can I do more than one course under ICCR scholarship?</h3>
                <h3 className="font-weight-light text-left">Under ICCR Scholarship program you can pursue only one course to which you are admitted.</h3>
                <h3 className="font-weight text-left">what is the main purpose of ICCR?</h3>
                <h3 className="font-weight-light text-left">The overall mandate of ICCR is promoting Indian culture abroad and furthering cultural ties with the rest of the world. The main objective of the Indian Council for Cultural Relations is – To foster harmony and encourage people to people interactions between India and other countries and project its distinct cultural identity all over the world.</h3>
            </div>
        </div>
        <Footer/>
        </div>
    );
}
export default Support;