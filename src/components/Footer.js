import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">Tablets Kenya</div>
          <p className="footer-desc">
            Specialist tablet store. Curated devices, fast local delivery, and friendly support.
          </p>
        </div>

        <div>
          <div className="footer-title">Shop</div>
          <ul className="footer-list">
            <li><a href="#">All Tablets</a></li>
            <li><a href="#">iPads</a></li>
            <li><a href="#">Elimu Tablets</a></li>
            <li><a href="#">Refurbished</a></li>
          </ul>
        </div>

        <div>
          <div className="footer-title">Support</div>
          <ul className="footer-list">
            <li><a href="#">Shipping & Delivery</a></li>
            <li><a href="#">Returns & Warranty</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        <div>
          <div className="footer-title">Contact</div>
          <div className="footer-contact">
            support@tabletskenya.co.ke<br/>
            Nairobi, Kenya<br/>
            +254 798765432
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Tablets Kenya   All rights reserved.
      </div>
    </footer>
  );
}