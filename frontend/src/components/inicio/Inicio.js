//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import NavMenu from '../navbar/NavMenu';

function Inicio() {
  return (
    <div>
      <NavMenu />
    <Row>
      <Col></Col>
        <Col xs={6}>
        <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first"><h1>¡Bienvenido!</h1> </Nav.Link>
                <Card.Body>
                <Card.Title>CoffeeTrack, se convertirá en tu mejor aliado.</Card.Title>
                <Card.Text>
                 En busca de facilitar tu control sobre el dinero y sobre los alimentos que los estudiantes 
                 consumen en las instalaciones del centro educativo, este sistema te ayudará a tener el conocimiento
                 y las herramientas necesarias para un correcto uso.
                </Card.Text>
                </Card.Body>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link"><h2>Ya seas un padre de familia, estudiante u operador de cafetería:</h2></Nav.Link>
            <Card.Body>
                <Card.Title>Aquí Podrás:</Card.Title>
                <Card.Text>
                  <h6>Como Padre de familia/estudiante:</h6>
                 <ol>
                  <li>Controlar la alimentación del estudiante.</li>
                  <li>Conocer el consumo a la fecha.</li>
                  <li>Recargar tu saldo, diario, semanal, quincenal o dependiendo de tu presupuesto.</li>
                  <li>Bloquear compras de tipos de productos.</li>
                  <li>Elegir cuanto se puede consumir y de que forma.</li>
                  <li>Descargar reporte de consumo y/o compras.</li>
                 </ol>
                 <h6>Como Operador de cafetería:</h6>
                 <ol>
                  <li>Conocer en tiempo real el estado de inventarios.</li>
                  <li>Realizar alertas de productos que estan por caducar o de baja rotación.</li>
                  <li>Realizar ordenes de compra por tipo de proveedor.</li>
                  <li>Agilizar los procesos manuales.</li>
                  <li>Tener el control sobre tu negocio-</li>
                  <li>Descargar reporte de productos mas consumidos.</li>
                 </ol>
                </Card.Text>
                </Card.Body>
          </Nav.Item>
        </Nav>
      </Card.Header>
    </Card>
        </Col>
        <Col></Col>
      </Row>
      </div>
    
  );
}

export default Inicio;