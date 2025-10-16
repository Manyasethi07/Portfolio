import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content" ref={aboutRef}>
          <div className="about-text">
            <p>
              I am a dedicated Computer Science Engineering student with a passion for developing 
              innovative solutions and exploring new technologies. My journey in tech began with a 
              curiosity for how things work, which has evolved into a drive to create meaningful 
              applications that solve real-world problems.
            </p>
            <p>
              With a strong foundation in programming fundamentals and a keen interest in emerging 
              technologies, I'm constantly learning and growing. I believe in the power of collaboration 
              and continuous improvement, always seeking opportunities to expand my knowledge and skills.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>8.3</h3>
              <p>CGPA</p>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <h3>5+</h3>
              <p>Projects</p>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>10+</h3>
              <p>Skills</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
