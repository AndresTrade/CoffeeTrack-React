import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import Inicio from './components/inicio/Inicio';
import About from './components/about/About'; 
import NavMenu from './components/navbar/NavMenu';
import Login from './components/login/Login.js';
import Registro from './components/registro/Registro';

import DashBoard from './components/dashboard/DashBoard.js';
import CargarSaldo from './components/dashboard/CargarSaldo.js';
import Consultar from './components/dashboard/Consultar.js';

function App() {
  return (
    <div>
    <Router>
      
        <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/cargarsaldo" element={<CargarSaldo/>} />
        <Route path="/consultar" element={<Consultar/>} />
        </Routes>
      
       
    </Router>
    </div>


  );
}

export default App;
