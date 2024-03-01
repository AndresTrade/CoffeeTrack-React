import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import NavMenu from '../navbar/NavMenu';

function About() {
  return (
    <div>
      <NavMenu />
    <Container>
      <Row>
        <Col></Col>
        <Col xs={6}>
        <Card body><h1>Sobre Nosotros</h1>
                   <h3>Este proyecto surge por la iniciativa del aprendiz
                    Andres Ariel Vargas Estupiñan de la ficha 2627108 del programa 
                    Analisis y Desarollo de Software, cuando por vivencia propia observó
                    en su entorno familiar y ayegado un inconveniente a la hora de que los 
                    padres de los estudiantes no podian tener certeza de como consumian los alimentos
                    sus hijos y de que forma, muchas veces generando inconformidades y 
                    tambien problemas alimenticios.
                   </h3>
        </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
    </div>
  );
}

export default About;