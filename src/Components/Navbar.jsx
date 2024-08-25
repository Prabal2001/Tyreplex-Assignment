import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CgProfile } from "react-icons/cg";
const Navigationbar = () => {
  return (
    <div>
        <Navbar expand="lg" bg='dark' className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src="/Images/TP-logo.jpg"
            alt="Tyreplex Logo"
            style={{  height: '40px', marginRight: '8px' }} // Adjust size as needed
          />
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Bike Tyres" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Bike Tyres</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
               MRF
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">CEAT</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Bridgestone
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Michelin
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              JK Tyres
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Car Tyres" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Car Tyres</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
               MRF
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">CEAT</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Good Year
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Michelin
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Bridgestone
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#home">Accessories</Nav.Link>
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Cashback Offers</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
               Find tyre dealers
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Wheel Alignment</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Wheel Balancing
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
            Compare Types
            </NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className='icons' style={{justifyContent: 'end' }}>
        <Nav>
        <div style={{display: "flex", margin:"4px",justifyContent: "end"}}>
        <CgProfile size={32} />
        <span style={{ marginLeft: "6px" }}>Login</span>
       </div>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default Navigationbar;

