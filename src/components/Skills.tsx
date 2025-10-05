import React from 'react';
import type { Skill } from '../types';
import { content } from '../config/content';
import './Skills.css';

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Python', level: 85, category: 'backend' },
    { name: 'Django', level: 80, category: 'backend' },
    { name: 'FastAPI', level: 75, category: 'backend' },
    { name: 'PostgreSQL', level: 75, category: 'backend' },
    { name: 'REST API', level: 80, category: 'backend' },
    { name: 'SQLAlchemy', level: 70, category: 'backend' },
    
    { name: 'HTML5', level: 75, category: 'frontend' },
    { name: 'CSS3', level: 70, category: 'frontend' },
    { name: 'JavaScript', level: 65, category: 'frontend' },
    { name: 'React', level: 60, category: 'frontend' },
    
    { name: 'Docker', level: 70, category: 'tools' },
    { name: 'Git', level: 80, category: 'tools' },
    { name: 'Linux', level: 75, category: 'tools' },
    { name: 'VS Code', level: 85, category: 'tools' },
    { name: 'Postman', level: 80, category: 'tools' },
  ];

  const categories = {
    frontend: content.skills.categories.frontend,
    backend: content.skills.categories.backend,
    tools: content.skills.categories.tools,
    other: 'Другое'
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">{content.skills.title}</h2>
        <p className="section-subtitle">
          {content.skills.subtitle}
        </p>
        
        <div className="skills-grid">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">
                {categories[category as keyof typeof categories]}
              </h3>
              <div className="skills-list">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-item">
            <h4>{content.skills.summary.frontend.title}</h4>
            <p>{content.skills.summary.frontend.description}</p>
          </div>
          <div className="summary-item">
            <h4>{content.skills.summary.backend.title}</h4>
            <p>{content.skills.summary.backend.description}</p>
          </div>
          <div className="summary-item">
            <h4>{content.skills.summary.tools.title}</h4>
            <p>{content.skills.summary.tools.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;