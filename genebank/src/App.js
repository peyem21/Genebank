import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Userguides from './pages/Userguides';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Dataaccess from './pages/Dataaccess';
import './App.css';
import Nav from './components/Nav.js';
import { Link } from 'react-router-dom';
// import Section from './Section.js';

function App() {
  return (
    <>
      <BrowserRouter>
       <Nav />
       <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/Userguides' Component={Userguides}></Route>
          <Route path='/Dataaccess' Component={Dataaccess}></Route>
          <Route path='/Signup' Component={Signup}></Route>
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
