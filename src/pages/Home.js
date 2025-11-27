import React, { useState } from "react";
import Hero from "../components/Hero";
import DealsSection from "../components/DealsSection";

const FILTER_CATEGORIES = [
  { id: 'iphone', label: 'iPhone' },
  { id: 'android', label: 'Android' },
  { id: 'macbook', label: 'MacBook' },
  { id: 'ipad', label: 'iPad' },
  { id: 'watch', label: 'Apple Watch' },
  { id: 'audio', label: 'Audio' },
  { id: 'accessories', label: 'Accessories' }
];

const PRODUCTS = [
  {
    id: 1,
    name: "iPhone 14 Midnight 128GB (Unlocked)",
    brand: "Apple",
    price: "KSh50,100.00",
    oldPrice: "KSh156,800.00",
    discount: "Save 69%",
    image: "/images/Apple.jpeg",
    colors: ['#1e3a8a', '#581c87', '#dc2626', '#fbbf24', '#e5e7eb', '#eab308']
  },
  {
    id: 2,
    name: "iPhone 14 Plus - Starter Pack",
    subtitle: "iPhone 14 Plus, Fast Charger, Case, & Screen Protector Bundle",
    brand: "Apple",
    price: "From KSh55,100.00",
    image: "/images/image1.png",
    colors: ['#dc2626', '#581c87', '#eab308', '#3b82f6', '#1e3a8a']
  },
  {
    id: 3,
    name: "iPhone 13 Midnight 128GB (Unlocked)",
    brand: "Apple",
    price: "From KSh45,100.00",
    oldPrice: "KSh138,500.00",
    discount: "Save 67%",
    image: "/images/Samsung Galaxy.jpeg",
    colors: ['#1e3a8a', '#16a34a', '#581c87', '#f472b6', '#dc2626', '#e5e7eb']
  },
  {
    id: 4,
    name: "iPhone 13 - Starter Pack",
    subtitle: "iPhone 13, Fast Charger, Case, & Screen Protector Bundle",
    brand: "Apple",
    price: "From KSh48,400.00",
    oldPrice: "KSh105,000.00",
    discount: "Save 63%",
    image: "/images/Xiaomi Pad.jpeg",
    colors: ['#dc2626', '#1e3a8a', '#3b82f6', '#e5e7eb', '#f472b6', '#16a34a']
  }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('iphone');

  return (
    <main>
      <Hero />
      
      <section className="product-section">
        <div className="container">
          <div className="category-filter-pills">
            {FILTER_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {PRODUCTS.map(product => (
              <div key={product.id} className="product-card-new">
                <div className="product-header">
                  {product.discount && <div className="sale-badge">SALE</div>}
                  <button className="wishlist-icon">♡</button>
                </div>
                
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} className="product-img" />
                </div>

                <div className="product-info">
                  <div className="product-brand">{product.brand}</div>
                  <h3 className="product-title">{product.name}</h3>
                  {product.subtitle && <p className="product-subtitle">{product.subtitle}</p>}
                  
                  <div className="product-pricing">
                    <div className="price-row">
                      <span className="current-price">{product.price}</span>
                      {product.discount && (
                        <span className="discount-badge">{product.discount}</span>
                      )}
                    </div>
                    {product.oldPrice && (
                      <span className="old-price">{product.oldPrice}</span>
                    )}
                  </div>

                  <div className="color-options">
                    {product.colors.map((color, idx) => (
                      <button
                        key={idx}
                        className="color-dot"
                        style={{ backgroundColor: color }}
                        aria-label={`Color option ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DealsSection />
    </main>
  );
}