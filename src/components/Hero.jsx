import React from 'react'
import './Hero.css'
import { getAssetPath } from '../utils/paths'

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img src={getAssetPath("/img/Product-Banner.jpg")} alt="Al Arz Products" className="hero-banner-image" />
        <div className="hero-content">
          {/* Hero products can be added here if needed */}
        </div>
      </div>
    </section>
  )
}

export default Hero

