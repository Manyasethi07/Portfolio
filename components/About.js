import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content" ref={aboutRef}>
          <div className="about-text">
            <p>
              I am a dedicated Computer Science Engineering student with a passion for technology 
              and innovation. I have a strong foundation in programming languages, data structures, 
              and algorithms. My goal is to leverage my technical skills and knowledge to contribute 
              to meaningful projects and continue learning in the ever-evolving field of technology.
            </p>
            <p>
              I enjoy solving complex problems and am always eager to take on new challenges. 
              My academic background combined with hands-on project experience has equipped me 
              with both theoretical knowledge and practical skills needed in the industry.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">8.26</div>
              <div className="stat-label">CGPA</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Skills</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
