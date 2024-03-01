import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import NavMenu from '../navbar/NavMenu';

import Validation from './SignupValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Registro() {
   
  const [values, setValues] = useState({
    nombre: '',
    usuario: '',
    email: '',
    password: '',
    telefono: '',
    curso: ''
  })
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.nombre === "" && errors.email === "" && errors.password === "" && errors.telefono === ""){
      axios.post('http://localhost:8081/usuarios', values)
      .then (res => {
        navigate('/login');
      })
    }
  }
  return (
      <div>
        <NavMenu />
      <div className='d-flex vh-100 justify-content-center align-items-center'>
      <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email/Usuario</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" name='email'
          onChange={handleInput}/>
          {errors.email && <span className='text-danger'>{errors.email}</span>}
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Ingrese una contraseña" name='password' 
          onChange={handleInput}/>
          {errors.password && <span className='text-danger'>{errors.password}</span>}
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Nombre</Form.Label>
        <Form.Control placeholder="Ingrese su nombre completo" name='nombre' 
        onChange={handleInput}/>
        {errors.nombre && <span className='text-danger'>{errors.nombre}</span>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Telefono</Form.Label>
        <Form.Control placeholder="Ingrese su numero de Celular" name='telefono' 
        onChange={handleInput}/>
        {errors.telefono && <span className='text-danger'>{errors.telefono}</span>}
      </Form.Group>

      <Row className="mb-3">
       
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Curso</Form.Label>
          <Form.Select defaultValue="Choose..." name='curso' onChange={handleInput}>
            <option>Seleecione un curso</option>
            <option>Sexto</option>
            <option>Septimo</option>
            <option>Octavo</option>
            <option>Noveno</option>
            <option>Decimo</option>
            <option>Once</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState2">
          <Form.Label>Tipo de Usuario</Form.Label>
          <Form.Select defaultValue="Choose..." name='usuario' onChange={handleInput}>
            <option>Seleccione el tipo de usuario</option>
            <option>Padre de Familia</option>
            <option>Estudiante</option>
            <option>Operador</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    </div>
    </div>
    )
  }


export default Registro;
