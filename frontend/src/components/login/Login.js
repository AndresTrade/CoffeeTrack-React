import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import axios from 'axios';
import Validation from './LoginValidation';
  

function Login() { 
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] =useState ({})
  const handleInput = (event) => {
    setValues(prev =>({...prev, [event.target.name]: [event.target.value]}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  }
  return (
    <div className='d-flex vh-100 justify-content-center align-items-center'>
    <div className='p-3 bg-blue w-25'>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Usuario/Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su email" 
        onChange={handleInput} /> {errors.email && <span className='text-danger'>{errors.email}</span>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Ingrese su Password"
        onChange={handleInput} /> {errors.password && <span className='text-danger'>{errors.password}</span>}
      </Form.Group>
      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    </Form>
    </div>
    </div>
  );

}

export default Login;