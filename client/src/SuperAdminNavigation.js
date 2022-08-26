import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Register from './register';

function SuperAdminNavigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="sh p-3 gradiating fixed-top">
      <Container>
        <Navbar.Brand href="/superadmin" className="">
        <img src="https://aniportalimages.s3.amazonaws.com/media/details/ICCR3110_AQ5L0rs.jpg" width="80px"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto coloring">
            <Nav.Link href="/superadmin">Home</Nav.Link>
            <Nav.Link href="/allregionaloffices">RegionalOffices</Nav.Link>
            <NavDropdown title="Add" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/addregionaloffice">Add Regional Office</NavDropdown.Item>
              <NavDropdown.Item href="/superadmin/addevent">Add Event</NavDropdown.Item>
              <NavDropdown.Item href="/superadmin/student">Add Student</NavDropdown.Item>
              <NavDropdown.Item href="/register">Add Admin</NavDropdown.Item>
            </NavDropdown >
            <Nav.Link href="/superadmin/statistics">Statistics</Nav.Link>
            <Nav.Link href="/superadmin/support">Support</Nav.Link>
            <Nav.Link href="/superadmin/contact">Contact us</Nav.Link>
            <Nav.Link href="/" className="rfix-1">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SuperAdminNavigation;