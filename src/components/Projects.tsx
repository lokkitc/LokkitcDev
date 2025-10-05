import React from 'react';
import { content } from '../config/content';
import './Projects.css';

const Projects: React.FC = () => {
  const placeholderProjects = Array(6).fill(null).map((_, index) => ({
    id: index + 1
  }));

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">{content.projects.title}</h2>
        <p className="section-subtitle">
          {content.projects.subtitle}
        </p>
        
        <div className="projects-section-wrapper">
          <div className="projects-grid">
            {placeholderProjects.map((project) => (
              <div key={project.id} className="project-card project-placeholder">
                <div className="project-image">
                  <span className="project-emoji">⏳</span>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">Скоро</h3>
                  <p className="project-description">Скоро..</p>
                  
                  <div className="project-technologies">
                    <span className="tech-tag">Скоро</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="coming-soon-overlay">
            <div className="coming-soon-content">
              <h3>Вскорем времени </h3>
              <p>Проекты будут доступны</p>
            </div>
          </div>
        </div>

        <div className="projects-cta">
          <h3>{content.projects.cta.title}</h3>
          <p>{content.projects.cta.description}</p>
          <a href="https://github.com/lokkitc" className="cta-button" target="_blank" rel="noopener noreferrer">
            {content.projects.cta.button}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;