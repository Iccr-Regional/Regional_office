import React ,{useState}from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Navigation(){
  return (
        <Navbar collapseOnSelect expand="lg" className="sh p-1 gradiating fixed-top">
       <Container>
         <Navbar.Brand href="/" className="">
         <img src="https://aniportalimages.s3.amazonaws.com/media/details/ICCR3110_AQ5L0rs.jpg" width="80px"></img>
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="me-auto">
             <Nav.Link href="/" className="">Home</Nav.Link>
             <NavDropdown title="Regional Offices" id="collasible-nav-dropdown" className="">
               <NavDropdown.Item href="/regionaloffice/1">
                 Ahmedabad
               </NavDropdown.Item>
               <NavDropdown.Item href="/regionaloffice/2">
                 Bangalure
               </NavDropdown.Item>
               <NavDropdown.Item href="/regionaloffice/3">
                 Delhi University
               </NavDropdown.Item>
               <NavDropdown.Item href="/regionaloffice/4">
                 Guwahati
               </NavDropdown.Item>
               <NavDropdown.Item href="/regionaloffice/5">
                 Jammu
               </NavDropdown.Item>
               <NavDropdown.Item href="/regionaloffice/6">
                 Kolkata
               </NavDropdown.Item>
               <NavDropdown.Item href="/regionaloffice/7">
                 Lucknow
               </NavDropdown.Item>
               <NavDropdown.Item href="/regionaloffice/8">
                 Mumbai
               </NavDropdown.Item>
               <NavDropdown.Item href="/regionaloffice/9">
                 Patna
               </NavDropdown.Item>
               <NavDropdown.Item href="/regionaloffice/10">
                 Pune</NavDropdown.Item>
               <NavDropdown.Item href="/regionaloffice/11">
                 Shillong
               </NavDropdown.Item>
             </NavDropdown>
             <Nav.Link href="/support" className="">Support</Nav.Link>
             <Nav.Link href="/contact" className="">Contact us</Nav.Link>
             <Nav.Link href="/addregionaloffice" className="hide-navigation">Add Regional Office</Nav.Link>
             <Nav.Link href="/addevent" className="hide-navigation">Add Event</Nav.Link>
             <Nav.Link href="/login" className="rfix">Login</Nav.Link>
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
  );
}

export default Navigation;