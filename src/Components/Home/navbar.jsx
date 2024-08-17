// src/Navigation.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/Navigation.css';  // Ensure this path is correct
import logo from '../../Images/logo.png';

const Navigation = () => {
  return (
    <header>
      {/* Start Navigation */}
      <Navbar bg="light" expand="lg" className="navbar-sticky">
        <Container>
          {/* Navbar Brand */}
          <Navbar.Brand href="index.html">
            <img src={logo} className="logo" alt="Logo" />
          </Navbar.Brand>
          {/* Navbar Toggle */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* Navbar Collapse */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto"> {/* Aligns the menu items to the right */}
              <Nav.Link href="contact-us.html">Home</Nav.Link>
              <Nav.Link href="contact-us.html">About</Nav.Link>
              <Nav.Link href="contact-us.html">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="overlay-screen"></div>
      </Navbar>
    </header>
  );
}

export default Navigation;
