import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'BLADE: Insider Threat Behavior Analysis',
    description: 'A web application for managing security logs, enabling real-time Insider Threat Behavior Analysis and Prediction based on Linux system logs. Uses Jupyter Notebooks, Python, and Streamlit to ingest, visualize, and classify log entries—helping security teams detect suspicious activity swiftly.',
    technologies: ['Python', 'Streamlit', 'Jupyter', 'Linux'],
    link: '',
    image: '',
  },
  {
    title: 'Penetration Testing Tool',
    description: 'Created a tool using Python and Scapy to automate network scanning and vulnerability detection.',
    technologies: ['Python', 'Scapy'],
    link: '',
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
