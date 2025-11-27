import React from "react";

const brands = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "Lenovo" },
  { id: 4, name: "Huawei" },
  { id: 5, name: "Xiaomi" },
  { id: 6, name: "Tecno" },
  { id: 7, name: "Nokia" },
];

export default function Navbar({ categories }) {
  return (
    <nav className="main-nav">
      <div className="nav-group">
        <button className="nav-btn">Shop Tablets</button>

        <div className="mega-menu">
          <div className="mega-grid">
            {categories.map((c) => (
              <a key={c.id} href="#" className="mega-item">
                <div className="mega-title">{c.name}</div>
                <div className="mega-sub">Explore {c.name}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="nav-group">
        <button className="nav-btn">Brands</button>

        <div className="mega-menu">
          <div className="mega-grid">
            {brands.map((b) => (
              <a key={b.id} href="#" className="mega-item">
                <div className="mega-title">{b.name}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <a href="#about" className="nav-link">About</a>
      <a href="#contact" className="nav-link">Contact Us</a>
    </nav>
  );
}
