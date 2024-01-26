import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo2 from '../../images/LogoCoffe.png';
//import Inicio from '../inicio/Inicio';
//import About from '../about/About';
//import Signup from '../login/Signup';

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
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/about">Sobre Nosotros</Nav.Link>
            <Nav.Link href="/login">Iniciar Sesión</Nav.Link>
            <Nav.Link href="/registro">Registrar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    )
  }
}
