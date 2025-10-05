import React, { useState } from 'react';
import type { ContactInfo } from '../types';
import { content } from '../config/content';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const contactInfo: ContactInfo = {
    email: content.contact.contactInfo.email,
    phone: content.contact.contactInfo.phone,
    location: content.contact.contactInfo.location,
    social: {
      github: 'https://github.com/lokkitc',
      linkedin: 'https://linkedin.com/in/https://www.linkedin.com/in/bekzat-talimbek-b9754a342',
      whatsapp: 'https://wa.me/message/R7IUT43MSWT6N1',
      telegram: 'https://t.me/LokkitcDev'
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setSubmitMessage(content.contact.form.successMessage);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">{content.contact.title}</h2>
        <p className="section-subtitle">
          {content.contact.subtitle}
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>{content.contact.info.title}</h3>
            
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h4>{content.contact.info.email}</h4>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📱</div>
              <div>
                <h4>{content.contact.info.phone}</h4>
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h4>{content.contact.info.location}</h4>
                <span>{contactInfo.location}</span>
              </div>
            </div>
            
            <div className="social-links">
              <h4>{content.contact.info.followMe}</h4>
              <div className="social-icons">
                <a href={contactInfo.social.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href={contactInfo.social.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                <a href={contactInfo.social.telegram} target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>{content.contact.form.title}</h3>
            
            {submitMessage && (
              <div className="submit-message success">
                {submitMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder={content.contact.form.namePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder={content.contact.form.emailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder={content.contact.form.subjectPlaceholder}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder={content.contact.form.messagePlaceholder}
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? content.contact.form.sendingButton : content.contact.form.sendButton}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;