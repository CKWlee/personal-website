import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Ensure correct path to your CSS file

const Navigation = () => {
  return (
    <Navbar bg="transparent" variant="dark" expand="lg" className="navbar-custom">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="ml-auto">
            <NavLink exact to="/" className="nav-link" activeClassName="active-link">Home</NavLink>
            <NavLink to="/bio" className="nav-link" activeClassName="active-link">Bio</NavLink>
            <NavLink to="/projects" className="nav-link" activeClassName="active-link">Coding Projects</NavLink>
            <NavLink to="/random" className="nav-link" activeClassName="active-link">Random Stuff</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
