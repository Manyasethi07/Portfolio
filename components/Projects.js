import React, { useEffect, useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Voice Assistant Application",
      description: "A Python-based voice assistant that can perform various tasks through voice commands, demonstrating natural language processing and speech recognition capabilities. Features include Wikipedia search, jokes, system control, and more Jarvis-like functionalities.",
      tech: ["Python", "Speech Recognition", "NLP", "PyAudio", "Wikipedia API"],
      icon: "🎤",
      color: "#FF6B9D"
    },
    {
      id: 2,
      title: "Algorithm Definer",
      description: "An interactive web application built with Python Tkinter and Streamlit that helps users understand and visualize various algorithms with detailed explanations. Features include typewriter animation, light/dark mode toggle, and comprehensive algorithm coverage.",
      tech: ["Python", "Tkinter", "Streamlit", "GUI", "Web App"],
      icon: "⚡",
      color: "#4ECDC4",
      link: "https://algorithm-explanation-app.streamlit.app/"
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid" ref={projectsRef}>
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-header">
                <div 
                  className="project-icon"
                  style={{ backgroundColor: project.color }}
                >
                  {project.icon}
                </div>
                <h3 className="project-title">{project.title}</h3>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.link && (
                <div className="project-links">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span>🌐</span>
                    Live Demo
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
