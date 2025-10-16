import React, { useEffect, useRef } from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievementsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (achievementsRef.current) {
      observer.observe(achievementsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      id: 1,
      title: "Smart India Hackathon Nomination",
      description: "Selected as a nominee for the prestigious Smart India Hackathon 2024, showcasing innovative problem-solving skills.",
      year: "2024",
      category: "Competition",
      icon: "fas fa-trophy"
    },
    {
      id: 2,
      title: "Debate Competition Winner",
      description: "Secured first place in the annual debate competition, demonstrating strong communication and analytical skills.",
      year: "2024",
      category: "Extracurricular",
      icon: "fas fa-comments"
    },
    {
      id: 3,
      title: "Bronze Medal in Sports Meet",
      description: "Achieved bronze medal in the annual sports meet, highlighting dedication to physical fitness and teamwork.",
      year: "2024",
      category: "Sports",
      icon: "fas fa-medal"
    },
    {
      id: 4,
      title: "Technical Certifications",
      description: "Completed multiple certifications including DBMS NPTEL, Python programming, and various online courses.",
      year: "2023-2024",
      category: "Certification",
      icon: "fas fa-certificate"
    }
  ];

  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid" ref={achievementsRef}>
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id} 
              className="achievement-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="achievement-icon">
                <i className={achievement.icon}></i>
              </div>
              
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
              
              <div className="achievement-tags">
                <span className="achievement-year">{achievement.year}</span>
                <span className="category-tag">{achievement.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
