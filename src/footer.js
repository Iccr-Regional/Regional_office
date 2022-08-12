// import React from "react";
// export default function Footer() {
//     return (
//       <div className="page-footer" xyz="fade down ease-in-out delay-10">
//         <div
//           className="footer-logo xyz-nested"
//           xyz="fade left ease-in-out delay-10"
//         ></div>
//         <div className="footer-right" xyz="fade up stagger ease-in-out delay-10">
//           <div className="footer-item xyz-nested"> Created by VVIT Students</div>
//           <div className="footer-item xyz-nested"></div>
//           <div className="footer-item xyz-nested"></div>
//         </div>
//       </div>
//     );
//   }
import React from "react";
import {Link} from "react-router-dom";
function Footer()
{
    return(
    <footer>
        <div className="container-fluid text-center" style={{backgroundColor:"lightblue"}}>
            {/* <div className="py-5">
                <h2 className="text-light">Interested in working with me?</h2>
                <Link to="/contact">
                <button className="btn btn-outline-light btn-lg mt-3">
                    Let's Talk
                </button>
                </Link>
                
            </div> */}
            {/* <div className="py-5">
                <h2 className="text-primary">About Us</h2>
            </div> */}
            <div className="row">
                <div className="col-12 col-md-4 py-3">
                    <h5 className="text-info pb-3">More Links</h5>
                    {/* <a href="/" className="text-light d-block"></a> */}
                    <Link to="/" className="text-dark d-block">Home</Link>
                    <Link to="/contact" className="text-dark d-block">Contact</Link>
                    <Link to="/allregionaloffices" className="text-dark d-block">Regional Offices</Link>
                    {/* <Link to="/write-a-recommendation" className="text-light">
                        Write a recommendation<i className="fas fa-heart text-light"></i>
                    </Link> */}
                </div>
                <div className="col-12 col-md-4 text-dark text-justify py-3">
                <h2 className="text-primary text-center">Address</h2>
                    <p className="py-3 text-center">
                    ICCR New Delhi<br/>
                    Azad Bhawan Rd,IP Estate, <br/>
                    New Delhi,<br/> 
                    Delhi-110002<br/>
                    </p>
                </div>
                <div className="col-12 col-md-4 py-3">
                    <h5 className="text-info pb-3">FOLLOW US</h5>
                    <Link to="https://www.instagram.com/iccr_delhi/">
                        <i className="fab fa-instagram text-light h1 d-block"></i></Link>
                    <Link to="https://iccr.gov.in/home">    
                        <i className="fab fa-google text-light h1 d-block"></i></Link>
                    <Link to="https://www.facebook.com/ICCROfficial">
                        <i className="fab fa-facebook text-light h1 d-block"></i>
                    </Link>
                </div>
            </div>
            <div className="text-muted py-3">
                <p> Copyright &copy; Slytherin 2022</p>
            </div>
        </div>
    </footer>
    );
}
export default Footer;