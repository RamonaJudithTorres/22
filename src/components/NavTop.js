import { Navbar, Container, Nav, NavItem,Row,Col, } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from 'react';
import '../App.css';
import '../index.css';
import logo from '../assets/logo.png'

export default function NavTop() {
  return (
    <Navbar expand="lg" className="navTopbg fw-bold  " >
      <Container>
            <Navbar.Brand>
              <img src={logo} />
              <Link  to="/" style={{
                textDecoration: 'none', color: 'navy'
              }}>Lab-Otarm</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />  
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link > <Link to="/aboutus" style={{
                  textDecoration: 'none', color: 'navy'
                }}>Acerca de nosotros</Link> </Nav.Link>
                <Nav.Link > <Link to="/resultados" style={{
                  textDecoration: 'none', color: 'navy'
                }}>Resultados</Link> </Nav.Link>
                <Nav.Link > <Link to="/estudios" style={{
                  textDecoration: 'none', color: 'navy'
                }}>Estudios</Link> </Nav.Link>
              </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

