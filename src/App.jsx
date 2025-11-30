import React, { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'
import ContactModal from './components/ContactModal'
import Footer from './components/Footer'
import { products } from './data/products'
import './App.css'

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="App">
      <Navigation onContactClick={() => setIsContactModalOpen(true)} />
      <Hero />
      
      <main>
        <section id="section1" className="product-section">
          <h2 className="section-title">حصة واحدة</h2>
          <ProductSection products={products.singleServing} />
        </section>

        <section id="section2" className="product-section">
          <h2 className="section-title">عبوات عائلية</h2>
          <ProductSection products={products.familyPackages} />
        </section>

        <section id="section3" className="product-section">
          <h2 className="section-title">عبوات للمناسبات</h2>
          <ProductSection products={products.occasionPackages} />
        </section>
      </main>

      <Footer />

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  )
}

export default App

