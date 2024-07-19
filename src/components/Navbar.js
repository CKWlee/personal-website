import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure this path is correct

const Navigation = () => {
  return (
    <Navbar bg="transparent" variant="dark" expand="lg" className="navbar-custom">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/bio" className="nav-link">Bio</Nav.Link>
            <Nav.Link as={Link} to="/projects" className="nav-link">Coding Projects</Nav.Link>
            <Nav.Link as={Link} to="/random" className="nav-link">Random Stuff</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
