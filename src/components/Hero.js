import React, { useState, useEffect } from "react";

const SLIDES = [
  { 
    image: "/images/image1.png", 
    badge: "Hot Limited time",
    title: "Upgrade your experience",
    subtitle: "Discover the latest tablets from Apple, Samsung, Lenovo and more. Certified devices, quick local delivery and secure checkout."
  },
  { 
    image: "/images/Apple.jpeg",
    badge: "Premium Quality",
    title: "Apple iPad Collection",
    subtitle: "Experience the power and elegance of Apple's finest tablets. Perfect for work, creativity, and entertainment."
  },
  { 
    image: "/images/Samsung Galaxy.jpeg",
    badge: "Best Seller",
    title: "Samsung Galaxy Tablets",
    subtitle: "Cutting-edge technology meets stunning design. Explore Samsung's innovative tablet lineup."
  },
  { 
    image: "/images/Xiaomi Pad.jpeg",
    badge: "Great Value",
    title: "Xiaomi Pad Series",
    subtitle: "Premium features at unbeatable prices. Discover why Xiaomi tablets are customer favorites."
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="carousel">
        <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {SLIDES.map((slide, idx) => (
            <div key={idx} className="carousel-slide">
              <div className="container">
                <div className="hero-inner">
                  <div className="hero-copy">
                    <div className="badge">{slide.badge}</div>
                    <h1 className="hero-title">{slide.title}</h1>
                    <p className="hero-sub">{slide.subtitle}</p>
                    <div className="hero-ctas">
                      <a href="#shop" className="btn primary">Shop Tablets</a>
                      <a href="#deals" className="btn outline">See Deals</a>
                    </div>
                  </div>
                  <div className="hero-media">
                    <img src={slide.image} alt={slide.title} className="hero-image" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-dots">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot ${idx === current ? 'active' : ''}`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}