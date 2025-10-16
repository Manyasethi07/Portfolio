import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        {/* Training Projects */}
        <div className="projects-subsection">
          <h3 className="subsection-title">Training Projects</h3>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-content">
                <h3 className="project-title">Voice Assistant (Jarvis)</h3>
                <p className="project-description">
                  A Python-based personal voice assistant designed to simplify daily tasks using voice commands. 
                  Features include time/date queries, Wikipedia searches, website navigation, system control, 
                  CPU monitoring, and entertainment functions like joke-telling.
                </p>
                <div className="project-details">
                  <div className="project-tools">
                    <strong>Tools Used:</strong> Python, Speech Recognition, Wikipedia API, PyAudio
                  </div>
                  <div className="project-duration">
                    <strong>Duration:</strong> 1 month
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Projects */}
        <div className="projects-subsection">
          <h3 className="subsection-title">Personal Projects</h3>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-content">
                <h3 className="project-title">Algorithm Definer</h3>
                <p className="project-description">
                  A Python Tkinter GUI tool with typewriter animation, light/dark mode toggle, and comprehensive 
                  algorithm explanations. Features an intuitive interface for learning and understanding various 
                  algorithms with visual representations.
                </p>
                <div className="project-links">
                  <a href="https://algorithm-explanation-app.streamlit.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-content">
                <h3 className="project-title">Disease Prediction</h3>
                <p className="project-description">
                  A web-based application that predicts diseases based on symptoms using machine learning models. 
                  Features an intuitive interface for symptom input and provides accurate disease predictions 
                  with confidence scores to assist in preliminary medical assessment.
                </p>
                <div className="project-links">
                  <a href="https://manyasethi07.github.io/Disease_Prediction/" target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-content">
                <h3 className="project-title">Portfolio Website</h3>
                <p className="project-description">
                  A modern, responsive portfolio website built with React.js showcasing my skills, projects, 
                  education, and achievements. Features smooth navigation, clean design, and seamless 
                  cross-device compatibility.
                </p>
                <div className="project-links">
                  <a href="https://github.com/Manyasethi07/portfolio" target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i>
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
