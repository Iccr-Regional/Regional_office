import React, { useState,Fragment} from 'react'
//import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaBars } from 'react-icons/fa'; 
import {
  Nav,
  NavContainer, 
  NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
  MobileIcon,
} from './NavbarStyles';
import './App.css';
const Navigation1 = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
      <Fragment>
        <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
           <NavContainer>
              <NavLogo href="/">ICCR</NavLogo>
              <MobileIcon>
               <FaBars />
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <NavLinks href="/">Home</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks href="/allregionaloffices">Regional Offices</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="/support">Support</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="/contact">Contact Us</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="/login">Sign In</NavLinks>
                </NavItem>
              </NavMenu>
           </NavContainer>
        </Nav>
      </Fragment>
    // <Navbar collapseOnSelect expand="lg" bg="dark"  variant="primary" className="sh p-3 fixing-pos">
    //   <Container>
    //     <Navbar.Brand href="/" className="lfix">
    //     <img src="https://aniportalimages.s3.amazonaws.com/media/details/ICCR3110_AQ5L0rs.jpg" width="80px"></img>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="/" className="rfix">Home</Nav.Link>
    //         <NavDropdown title="Regional Offices" id="collasible-nav-dropdown" className="rfix">
    //           <NavDropdown.Item href="/regionaloffice/1">
    //             Ahmedabad
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="/regionaloffice/2">
    //             Bangalure
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="/regionaloffice/3">
    //             Delhi University
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="/regionaloffice/4">
    //             Guwahati
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="/regionaloffice/5">
    //             Jammu
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="/regionaloffice/6">
    //             Kolkata
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="/regionaloffice/7">
    //             Lucknow
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="/regionaloffice/8">
    //             Mumbai
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="/regionaloffice/9">
    //             Patna
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="/regionaloffice/10">
    //             Pune</NavDropdown.Item>
    //           <NavDropdown.Item href="/regionaloffice/11">
    //             Shillong
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //         <Nav.Link href="/support" className="rfix">Support</Nav.Link>
    //         <Nav.Link href="/contact" className="rfix">Contact us</Nav.Link>
    //         <Nav.Link href="/addregionaloffice" className="hide-navigation rfix">Add Regional Office</Nav.Link>
    //         <Nav.Link href="/addevent" className="hide-navigation rfix">Add Event</Nav.Link>
    //         <Nav.Link href="/login" className="nav-cta">Login</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    );
}
  
export default Navigation1;