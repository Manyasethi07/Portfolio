import React, { useEffect, useRef } from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievementsRef = useRef(null);

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

    if (achievementsRef.current) {
      observer.observe(achievementsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      id: 1,
      title: "Smart India Hackathon Nomination",
      year: "2024",
      description: "Nominated for the prestigious Smart India Hackathon, showcasing innovative problem-solving skills and technical expertise.",
      icon: "🏆",
      color: "#FFD700",
      category: "Competition"
    },
    {
      id: 2,
      title: "Debate Competition Winner",
      year: "2024",
      description: "Secured first place in college debate competition, demonstrating strong communication and analytical skills.",
      icon: "🎭",
      color: "#FF6B9D",
      category: "Extracurricular"
    },
    {
      id: 3,
      title: "Bronze Medal in Sports Meet",
      year: "2024",
      description: "Achieved bronze medal in college sports meet, highlighting dedication to physical fitness and teamwork.",
      icon: "🥉",
      color: "#CD7F32",
      category: "Sports"
    },
    {
      id: 4,
      title: "Technical Certifications",
      year: "2023-2024",
      description: "Completed various certifications including DBMS NPTEL, Python programming, and other technical courses.",
      icon: "📜",
      color: "#4ECDC4",
      category: "Certification"
    }
  ];

  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid" ref={achievementsRef}>
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id} 
              className="achievement-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="achievement-header">
                <div 
                  className="achievement-icon"
                  style={{ backgroundColor: achievement.color }}
                >
                  {achievement.icon}
                </div>
                <div className="achievement-info">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <span className="achievement-year">{achievement.year}</span>
                </div>
              </div>
              
              <p className="achievement-description">{achievement.description}</p>
              
              <div className="achievement-category">
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
