import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const skillsRef = useRef(null);

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Python", "HTML5", "CSS3", "JavaScript"],
      icon: "💻",
      color: "#FF6B9D"
    },
    {
      title: "Databases & Tools",
      skills: ["MySQL", "Git", "VS Code"],
      icon: "🛠️",
      color: "#4ECDC4"
    },
    {
      title: "Computer Science Concepts",
      skills: ["Data Structures", "Algorithms", "Computer Networks", "Database Management", "Operating Systems", "Cyber Security"],
      icon: "🧠",
      color: "#45B7D1"
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container" ref={skillsRef}>
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="skills-category"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="category-header">
                <div 
                  className="category-icon"
                  style={{ backgroundColor: category.color }}
                >
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-item"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
