import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-wrapper">
      <div className="video-background">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/Cinematic Trees Forest Nature [No Copyright video].mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      <header className={`hero-section ${isVisible ? 'visible' : ''}`}>
        <h1 className="main-title">Baboons R Us</h1>
        <div className="subtitle-container">
          <p className="subtitle">Science to understand our origins...</p>
          <p className="subtitle">Conservation to guarantee our future</p>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
          <p>Scroll to explore</p>
        </div>
      </header>
    </section>
  );
};

export default Hero;