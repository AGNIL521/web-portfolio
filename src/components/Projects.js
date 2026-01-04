import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'BLADE (Security Log Management)',
    description: 'Real-time analysis and prediction of risky internal behaviors using Linux system logs (Python, Streamlit, Jupyter).',
    technologies: ['Python', 'Streamlit', 'Jupyter', 'Linux'],
    link: '',
    image: '',
  },
  {
    title: 'Penetration Testing Tool',
    description: 'Automated tool for network scanning and vulnerability detection using Python/Scapy.',
    technologies: ['Python', 'Scapy'],
    link: '',
    image: '',
  },
  {
    title: 'Defensive Cybersecurity Lab',
    description: 'Segmented network environment using pfSense and TinyCore Linux for defense simulation.',
    technologies: ['pfSense', 'TinyCore Linux', 'Network Security'],
    link: '',
    image: '',
  },
  {
    title: 'ShieldAI',
    description: 'Understanding and Defending Against Adversarial Threats in Cybersecurity.',
    technologies: ['Python', 'AI/ML', 'Cybersecurity'],
    link: 'https://github.com/AGNIL521/ShieldAI',
    image: '',
  },
];

const Projects = () => (
  <section className="projects" id="projects">
    <h2>Activities & Projects</h2>
    <div className="projects__grid">
      {projects.map((project, idx) => (
        <div className="project__card" key={idx}>
          {project.image && <img src={project.image} alt={project.title} className="project__image" />}
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project__tech">
            {project.technologies.map((tech, i) => <span key={i}>{tech}</span>)}
          </div>
          {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>}
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
