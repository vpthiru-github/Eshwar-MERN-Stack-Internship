import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Certification from './components/Certification';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Certification />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
