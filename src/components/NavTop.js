import { Navbar, Container, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

import React from 'react'


export default function NavTop() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand> <Link to="/" style={{
          textDecoration: 'none', color: 'black'
        }}>Lab-Otarm</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link > <Link to="/aboutus" style={{
          textDecoration: 'none', color: 'black'}}>Acerca de nosotros</Link> </Nav.Link>
            <Nav.Link > <Link to="/resultados"style={{
          textDecoration: 'none', color: 'black' }}>Resultados</Link> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

