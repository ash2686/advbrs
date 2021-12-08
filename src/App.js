import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import About from './components/about/About';
import Expertise from './components/expertise/Expertise';
import Case from './components/case/Case';
import Faq from './components/faq/Faq';
import Contact from './components/contact/Contact';
// import vid from './assets/vid.mp4'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
      <Menu />
        <Routes>          
          <Route exact path='/' element = {<Home />} />
          <Route path='/about' element = {<About />} />
          <Route path='/expertise' element = {<Expertise />} />
          <Route path='/cs' element = {<Case />} />
          <Route path='/faq' element = {<Faq />} />
          <Route path='/contact' element = {<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
