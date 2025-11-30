import React, { useState } from 'react'
import ProductCard from './ProductCard'
import './ProductSection.css'

function ProductSection({ products }) {
  const [selectedProductIndex, setSelectedProductIndex] = useState(null)

  const handleNext = () => {
    if (selectedProductIndex !== null) {
      const nextIndex = (selectedProductIndex + 1) % products.length
      setSelectedProductIndex(nextIndex)
    }
  }

  const selectedProduct = selectedProductIndex !== null ? products[selectedProductIndex] : null

  return (
    <div className="product-section-container">
      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onClick={() => setSelectedProductIndex(index)}
          />
        ))}
      </div>

      {selectedProduct && (
        <div className="product-modal" onClick={() => setSelectedProductIndex(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProductIndex(null)}>
              ×
            </button>
            <div className="modal-image-container">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name || selectedProduct.brand}
              />
            </div>
            <div className="modal-info">
              <h3>{selectedProduct.brand}</h3>
              <h4>{selectedProduct.name}</h4>
            </div>
            <div className="modal-navigation">
              <button className="nav-btn next" onClick={handleNext}>التالي</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductSection

