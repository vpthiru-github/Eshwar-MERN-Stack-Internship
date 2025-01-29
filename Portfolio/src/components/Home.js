import React from 'react';
import './Home.css';
import hero from './profile_logo.webp';

const Home = () => {
  return (
    <section id='home' className='home-section'>
      <div className='container'>
        <div className='text-section'>
          <h1>Hi, There<br />
            <span>I'm Thiruneelin</span>
          </h1>
          <h3>I'm a Full Stack developer</h3>
          <p></p>
          <a href="#contact" className='btn'>Hire Me</a>
        </div>
        <div className='image-section'>
          <img src={hero} alt="k-logo" />
        </div>
      </div>
    </section>
  );
};

export default Home;
