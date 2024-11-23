// Hero.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Share2, MessageCircle, Linkedin } from 'lucide-react';import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollPosition * 0.5;

  return (
    <section className="hero-wrapper">
      <div className="video-background" style={{ transform: `translateY(${parallaxOffset}px)` }}>
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/Cinematic Trees Forest Nature [No Copyright video].mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      <nav className="main-nav">
        <div className="nav-content">
          <div className="nav-logo">
            <img src="/api/placeholder/40/40" alt="Logo" className="logo-image" />
            <span className="logo-text">Primate Research Institute</span>
          </div>

          <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#science">Science</a>
            <a href="#conservation">Conservation</a>
            <button className="cta-button">Get Involved</button>
          </div>
        </div>
      </nav>

      <header className={`hero-section ${isVisible ? 'visible' : ''}`}>
        <div className="hero-content">
          <h1 className="main-title">Primate Research Institute</h1>
          <p className="main-description">
            Advancing our understanding of primate behavior, ecology, and conservation
          </p>
          <div className="subtitle-container">
            <p className="subtitle">Science to understand our origins...</p>
            <div className="subtitle-divider"></div>
            <p className="subtitle">Conservation to guarantee our future</p>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse"></div>
          <ChevronDown className="scroll-arrow" />
          <p>Scroll to explore</p>
        </div>

        <div className="social-links">
  <a href="#" className="social-icon"><Share2 size={20} /></a>
  <a href="#" className="social-icon"><MessageCircle size={20} /></a>
  <a href="#" className="social-icon"><Linkedin size={20} /></a>
</div>

        <div className="newsletter-signup">
          <p className="newsletter-text">Stay updated with our research</p>
          <div className="signup-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="email-input"
            />
            <button className="submit-button">Subscribe</button>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Hero;