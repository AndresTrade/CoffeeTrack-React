import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo2 from '../../images/LogoCoffe.png';


export default class NavMenu extends Component {
  render() {
    return (
        <>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <img src={logo2} alt='logo' />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link  to="/">Inicio </Link></Nav.Link>
            <Nav.Link><Link to="/about">Sobre Nosotros</Link></Nav.Link>
            <Nav.Link><Link to="/login">Iniciar Sesión</Link></Nav.Link>
            <Nav.Link><Link to="/registro">Registrar</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    )
  }
}
