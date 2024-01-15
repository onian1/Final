import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Navbar from './components/Navbar';

ReactDOM.render(
  <Router>
    <Header/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About/>} />
    </Routes>
    <Footer/>
  </Router>,
  document.getElementById('root')
);