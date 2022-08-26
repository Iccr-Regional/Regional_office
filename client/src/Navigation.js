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
             <Nav.Link href="/allregionaloffices" >Regional Offices</Nav.Link>
             <Nav.Link href="/statistics">Statistics</Nav.Link>
             <Nav.Link href="/studentpage" className="">Student Details</Nav.Link>
             <Nav.Link href="/support" className="">Support</Nav.Link>
             <Nav.Link href="/contact" className="">Contact us</Nav.Link>
             
             <Nav.Link href="/login" className="rfix">Login</Nav.Link>
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
  );
}

export default Navigation;