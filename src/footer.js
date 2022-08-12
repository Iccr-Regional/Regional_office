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
                <h2 className="text-primary text-center">About Us</h2>
                    <p className="py-3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
                <div className="col-12 col-md-4 py-3">
                    <h5 className="text-info pb-3">Social</h5>
                    <a href="#">
                        <i className="fab fa-instagram text-light h1 d-block"></i>
                        <i className="fab fa-google text-light h1 d-block"></i>
                        <i className="fab fa-facebook text-light h1 d-block"></i>
                    </a>
                </div>
            </div>
            <div className="text-muted py-3">
                <p>&copy; Slytherin</p>
            </div>
        </div>
    </footer>
    );
}
export default Footer;