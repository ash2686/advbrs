import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import About from './components/about/About';
import Expertise from './components/expertise/Expertise';
import Case from './components/case/Case';
import Faq from './components/faq/Faq';
// import vid from './assets/vid.mp4'

function App() {
  return (
    <Router>
      <div className="App">
      <Menu />
        <Routes>          
          <Route exact path='https://ash2686.github.io/advbrs' element = {<Home />} />
          <Route path='/about' element = {<About />} />
          <Route path='/expertise' element = {<Expertise />} />
          <Route path='/cs' element = {<Case />} />
          <Route path='/faq' element = {<Faq />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
