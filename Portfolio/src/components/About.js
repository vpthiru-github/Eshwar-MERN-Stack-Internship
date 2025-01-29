import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        
        <div className="bio-section">
          <h3>THIRUNEELIN V P</h3>
          <div className="bio-content">
            <p>
              As a B.E CSE(AIML) student at Sri Eshwar College of Engineering, I am deeply passionate about software development and problem-solving. My journey in technology has equipped me with a versatile skill set in programming languages and development tools.
            </p>
            <p>
              My technical expertise includes:
            </p>
            <ul>
              <li>Strong foundation in C/C++ programming and Data Structures</li>
              <li>Web development skills with HTML, CSS</li>
              <li>Database management using SQL</li>
              <li>Application development with Java and Python</li>
            </ul>
            <p>
              I've applied these skills in developing practical solutions like a Bank Management System, a Telegram Bot, and a Game Schedular and Score Calculator. Each project has strengthened my ability to write efficient code and create user-friendly applications.
            </p>
            <p>
              Currently focusing on expanding my knowledge in Full Stacks while actively seeking opportunities to contribute to innovative projects.
            </p>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/thiruneelin-v-p-7416b6291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a>
            <a href="https://github.com/vpthiru-github">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
