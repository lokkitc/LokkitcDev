import React from 'react';
import { content } from '../config/content';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">{content.about.title}</h2>
            <div className="about-description">
              {content.about.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="about-highlights">
              <div className="highlight-item">
                <h3>4</h3>
                <p>{content.about.highlights.experience}</p>
              </div>
              <div className="highlight-item">
                <h3>10+</h3>
                <p>{content.about.highlights.projects}</p>
              </div>
              <div className="highlight-item">
                <h3>8+</h3>
                <p>{content.about.highlights.technologies}</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-container">
              <div className="about-photo">
                <span>📸</span>
              </div>
              <div className="decorative-elements">
                <div className="element element-1"></div>
                <div className="element element-2"></div>
                <div className="element element-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;