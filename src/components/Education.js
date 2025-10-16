import React, { useEffect, useRef } from 'react';
import './Education.css';

const Education = () => {
  const educationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "CGC Landran",
      period: "2022 - 2026",
      score: "CGPA: 8.3",
      icon: "fas fa-graduation-cap",
      description: "Currently pursuing my degree with focus on software development, algorithms, and computer science fundamentals."
    },
    {
      id: 2,
      degree: "Intermediate (12th Standard)",
      institution: "Arya Girls Public School",
      period: "2020 - 2022",
      score: "Percentage: 76%",
      icon: "fas fa-school",
      description: "Completed 12th standard with Mathematics and Computer Science as core subjects."
    },
    {
      id: 3,
      degree: "Matriculation (10th Standard)",
      institution: "Arya Girls Public School",
      period: "2018 - 2020",
      score: "Percentage: 83%",
      icon: "fas fa-book",
      description: "Completed 10th standard with strong foundation in core subjects."
    }
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline" ref={educationRef}>
          {educationData.map((education, index) => (
            <div key={education.id} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-icon">
                  <i className={education.icon}></i>
                </div>
                
                <div className="timeline-details">
                  <h3 className="degree">{education.degree}</h3>
                  <p className="institution">{education.institution}</p>
                  <p className="timeline-period">{education.period}</p>
                  <span className="score">{education.score}</span>
                  <p className="description">{education.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
