import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img src="/img/Product-Banner.jpg" alt="Al Arz Products" className="hero-banner-image" />
        <div className="hero-content">
          {/* Hero products can be added here if needed */}
        </div>
      </div>
    </section>
  )
}

export default Hero

