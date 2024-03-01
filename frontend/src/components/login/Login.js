import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavMenu from '../navbar/NavMenu';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Validation from './LoginValidation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
  

function Login() { 
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate();
  const [errors, setErrors] =useState ({})
  const handleInput = (event) => {
    setValues(prev =>({...prev, [event.target.name]: [event.target.value]}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === ""){
      axios.post('http://localhost:8081/login', values)
      .then (res =>{
        console.log("Respuesta del servidor:", res.data); // Agrega este console.log
        if(res.data === "Exito"){
          navigate('/dashboard');
        }else{
          console.log("No esta registrado");
        } 
      })
      .catch(err => console.log(err));
    }
  }
  return (
    <div>
      <NavMenu />
    <div className='d-flex vh-100 justify-content-center align-items-center'>
    <div className='p-3 bg-blue w-25'>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Usuario/Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su email" name='email'
        onChange={handleInput} /> {errors.email && <span className='text-danger'>{errors.email}</span>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Ingrese su Password" name='password'
        onChange={handleInput} /> {errors.password && <span className='text-danger'>{errors.password}</span>}
      </Form.Group>
      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    </Form>
    </div>
    </div>
    </div>
  );

}

export default Login;