import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import About from './components/about/About';
// import vid from './assets/vid.mp4'

function App() {
  return (
    <Router>
      <div className="App">
      <Menu />
        <Routes>          
          <Route exact path='/' element = {<Home />} />
          <Route path='/about' element = {<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
