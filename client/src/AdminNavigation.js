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
          <img src="https://aniportalimages.s3.amazonaws.com/media/details/ICCR3110_AQ5L0rs.jpg" width="80px"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/admin">Home</Nav.Link>
            <NavDropdown title="Regional Offices" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/regionaloffice/1">Ahmedabad</NavDropdown.Item>
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
              <NavDropdown.Item href="/regionaloffice/6">Kolkata</NavDropdown.Item>
              <NavDropdown.Item href="/regionaloffice/7">
                Lucknow
              </NavDropdown.Item>
              <NavDropdown.Item href="/regionaloffice/8">Mumbai</NavDropdown.Item>
              <NavDropdown.Item href="/regionaloffice/9">
                Patna
              </NavDropdown.Item>
              <NavDropdown.Item href="/regionaloffice/10">Pune</NavDropdown.Item>
              <NavDropdown.Item href="/regionaloffice/11">
                Shillong
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/support">Support</Nav.Link>
            <Nav.Link href="/contact">Contact us</Nav.Link>
            <Nav.Link href="/addevent">Add Event</Nav.Link>
            <Nav.Link href="/login" className="fixing">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNavigation;