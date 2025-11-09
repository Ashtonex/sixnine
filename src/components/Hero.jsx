// src/components/Hero.jsx
import React from 'react';
import heroVideo from './src/assets/hero-video.mp4';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>BUILD YOUR DREAM</h1>
          <p>We offer professional services for construction and renovation.</p>
          <button className="gradient-button">Get Your Free Estimate</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
