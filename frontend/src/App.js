import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Inicio from './components/inicio/Inicio';
import About from './components/about/About'; 
import NavMenu from './components/navbar/NavMenu';
import Login from './components/login/Login.js';
import Registro from './components/registro/Registro';
import DashBoard from './components/dashboard/DashBoard.js';

function App() {
  return (
    <Router>

      <NavMenu/>
        <Routes>


        <Route exact path="/" element={<Inicio />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/dashboard" element ={<DashBoard />} />
        
        </Routes>
    </Router>
  );
}

export default App;
