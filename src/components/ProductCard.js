import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-media">
        <img 
          src={`https://via.placeholder.com/320x220?text=${encodeURIComponent(product.name)}`} 
          alt={product.name} 
          className="product-image" 
        />
        {product.badge && <div className="product-badge">{product.badge}</div>}
      </div>
      <div className="product-body">
        <div className="product-name">{product.name}</div>
        <div className="product-prices">
          <div className="product-price">{product.price}</div>
          {product.oldPrice && <div className="product-old">{product.oldPrice}</div>}
        </div>
        <div className="product-actions">
          <button className="btn small">Add to cart</button>
          <div className="product-rating">★ {product.rating}</div>
        </div>
      </div>
    </div>
  );
}