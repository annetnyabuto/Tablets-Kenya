import React from "react";
import Navbar from "./Navbar";

const categories = [
  { id: 1, name: "Android Tablets" },
  { id: 2, name: "iPads" },
  { id: 3, name: "Kids Tablets" },
  { id: 4, name: "Drawing Tablets for Designers" },
  { id: 5, name: "Refurbished Tablets" },
];

export default function Header() {
  return (
    <>
      {/* Top Promo Bar */}
      <div className="top-promo">
        <div className="promo-inner">
          <div>
            Free delivery in Nairobi for orders over KES 5,000 • 12-month warranty on certified devices
          </div>
          <div className="promo-extra">Secure payments • Easy returns</div>
        </div>
      </div>

      {/* Main Header */}
      <header className="site-header">
        <div className="header-inner">

          <div className="brand-nav">
            {/* LEFT — Brand */}
            <div className="brand">
              <img src="/images/logo.png" alt="Tablets Kenya" className="brand-logo" />
              <div className="brand-name">Tablets Kenya</div>
            </div>

            {/* CENTER — Navigation */}
            <Navbar categories={categories} />
          </div>

          {/* RIGHT — Search & Actions */}
          <div className="header-actions">
            <div className="search-wrap">
              <input 
                type="search" 
                placeholder="Search tablets, models, specs..." 
                className="search-input" 
              />
              <button className="search-btn">Search</button>
            </div>

            <div className="small-actions">
              <button className="wishlist-btn">Wishlist</button>

              <a href="#cart" className="cart-btn">
                <img src="/images/download.png" alt="Cart" className="cart-icon" />
                <span className="cart-total">KES 0</span>
              </a>
            </div>
          </div>

        </div>
      </header>
    </>
  );
}
