import React, { useEffect, useRef } from 'react';
import './Education.css';

const Education = () => {
  const educationRef = useRef(null);

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

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      id: 1,
      period: "2022 - 2026",
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Chandigarh Group of Colleges, Landran",
      details: "Currently pursuing my degree with focus on software development, algorithms, and computer science fundamentals.",
      cgpa: "8.26 CGPA",
      icon: "🎓",
      color: "#FF6B9D"
    },
    {
      id: 2,
      period: "2020 - 2022",
      degree: "Intermediate (12th Standard)",
      institution: "Arya Girls Public School",
      details: "Completed 12th standard with Mathematics and Computer Science as core subjects.",
      percentage: "76%",
      icon: "📚",
      color: "#4ECDC4"
    },
    {
      id: 3,
      period: "2018 - 2020",
      degree: "Matriculation (10th Standard)",
      institution: "Arya Girls Public School",
      details: "Completed 10th standard with strong foundation in core subjects.",
      percentage: "83%",
      icon: "🏫",
      color: "#45B7D1"
    }
  ];

  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline" ref={educationRef}>
          {educationData.map((item, index) => (
            <div 
              key={item.id} 
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <div 
                    className="timeline-icon"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div className="timeline-period">{item.period}</div>
                </div>
                
                <h3 className="timeline-degree">{item.degree}</h3>
                <p className="timeline-institution">{item.institution}</p>
                <p className="timeline-details">{item.details}</p>
                
                <div className="timeline-score">
                  {item.cgpa && <span className="score cgpa">{item.cgpa}</span>}
                  {item.percentage && <span className="score percentage">{item.percentage}</span>}
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
