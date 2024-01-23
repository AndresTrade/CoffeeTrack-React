import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Inicio from './components/inicio/Inicio';
import About from './components/about/About'; 
import NavMenu from './components/navbar/NavMenu';
import Signup from './components/login/Signup';
import Registro from './components/registro/Registro';

function App() {
  return (
    <Router>

      <NavMenu/>
        <Routes>


        <Route exact path="/" element={<Inicio />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/registro" element={<Registro />} />
        
        </Routes>
    </Router>
  );
}

export default App;
