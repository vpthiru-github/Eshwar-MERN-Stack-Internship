import React from 'react';
import './Nav.css';
import logo from './vp_logo.jpg';

const Nav = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt="gj-logo" />
        <span>THIRUNEELIN</span>
      </div>
      <nav className='link'>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#certification'>Certification</a>
        <a href='#skill'>Skills</a>
        <a href="#project">Projects</a>
      </nav>
      <div className='cont'>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Nav;
