import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function AdminNavigation() {
  return (
    <Navbar collapseOnSelect expand="lg"  className="sh p-3 gradiating fixed-top">
      <Container>
        <Navbar.Brand href="/admin" className="">
          <img src="https://aniportalimages.s3.amazonaws.com/media/details/ICCR3110_AQ5L0rs.jpg" width="60px"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/admin">Home</Nav.Link>
            
            <Nav.Link href="/allregionaloffices">RegionalOffices</Nav.Link>
            <NavDropdown title="Add" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/addevent">Add Event</NavDropdown.Item>
              <NavDropdown.Item href="/student">Add Student</NavDropdown.Item>
            </NavDropdown >
            <Nav.Link href="/admin/statistics">Statistics</Nav.Link>
            <Nav.Link href="/admin/studentpage" className="">Student Details</Nav.Link>
            <Nav.Link href="/support">Support</Nav.Link>
            <Nav.Link href="/contact">Contact us</Nav.Link>
            
            <Nav.Link href="/" className="fixing">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNavigation;