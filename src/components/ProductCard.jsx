import React from 'react'
import './ProductCard.css'

function ProductCard({ product, onClick }) {
  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name || product.brand}
        />
      </div>
      <div className="product-info">
        <h3 className="product-brand">{product.brand}</h3>
        <h4 className="product-name">{product.name}</h4>
      </div>
    </div>
  )
}

export default ProductCard

