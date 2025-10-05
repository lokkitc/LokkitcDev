import React from 'react';
import { content } from '../config/content';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              {content.hero.greeting} <span className="highlight">{content.hero.real_name}</span>
            </h1>
            <h2 className="hero-subtitle">
              {content.hero.title}
            </h2>
            <p className="hero-description">
              {content.hero.description}
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToProjects}>
                {content.hero.viewWorkBtn}
              </button>
              <button className="btn btn-secondary" onClick={scrollToContact}>
                {content.hero.contactBtn}
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <div className="profile-circle">
                <span>👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-indicator">
            <span>{content.hero.scrollDown}</span>
            <div className="scroll-arrow">↓</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;