import React from "react";

const DEALS = [
  {
    id: 1,
    badge: "SAVE EXTRA KSh5,000",
    title: "iPad 8th Gen - Gift Pack",
    subtitle: "Get the iPad 8th Gen with accessories bundle at an unbeatable price",
    image: "/images/Apple.jpeg",
  },
  {
    id: 2,
    badge: "SAVE EXTRA KSh20,000",
    title: "Samsung Galaxy Z Fold 6",
    subtitle: "Experience the future of mobile technology with this premium foldable",
    image: "/images/Samsung Galaxy.jpeg",
  },
  {
    id: 3,
    badge: "SAVE EXTRA KSh8,000",
    title: "iPhone 13 Series",
    subtitle: "Powerful performance and stunning design at incredible savings",
    image: "/images/image1.png",
  },
  {
    id: 4,
    badge: "SAVE EXTRA KSh3,500",
    title: "Apple Watch Series 7",
    subtitle: "Your ultimate health and fitness companion on your wrist",
    image: "/images/Xiaomi Pad.jpeg",
  },
  {
    id: 5,
    badge: "SAVE EXTRA KSh12,000",
    title: "Apple Gift Pack",
    subtitle: "iPad + Apple Watch bundle - The perfect combination for productivity",
    image: "/images/Apple.jpeg",
  },
  {
    id: 6,
    badge: "SAVE EXTRA KSh6,500",
    title: "iPhone + Mobile Pack",
    subtitle: "Complete mobile bundle with charger, case, and screen protector",
    image: "/images/image2.png",
  },
];

export default function DealsSection() {
  return (
    <section className="deals-section">
      <div className="container">
        <div className="deals-grid">
          {DEALS.map((deal) => (
            <div key={deal.id} className="deal-card">
              <div className="deal-badge">{deal.badge}</div>
              <h2 className="deal-title">{deal.title}</h2>
              <p className="deal-subtitle">{deal.subtitle}</p>
              <div className="deal-image-wrapper">
                <img src={deal.image} alt={deal.title} className="deal-image" />
              </div>
              <a href="#shop" className="deal-link">
                Shop Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
