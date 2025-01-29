import React from 'react';
import './Project.css';

const Project = () => {
  const projects = [
    {
      title: "Bank Management System",
      description: "Developed a comprehensive Bank Management System. Collaborated with team members to divide tasks, meet deadlines, and deliver a high-quality product.",
      technologies: ["C Programming"],
    },
    {
      title: "Telegram Bot (tamil_tunes)",
      description: "Developed a Telegram Bot using Python and web-scrapin to fetch songs from browser and return it to users.",
      technologies: ["Python"],
    },
    {
      title: "Game Scheduler and Score calculator",
      description: "Developed a Java and DBMS-based application for , supporting functionalities like adding leagues and teams, udating leagues and teams and deleting leagues and teams and calculating the win rates and displaying the standings.",
      technologies: ["Java", "DBMS"],
    }
  ];

  return (
    <section id="project" className="project-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a className="project-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
