import React, { useState } from 'react';

export default function HeroSection({ onExploreClick }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      badge: "Nouveauté",
      title: "La technologie\nà portée de main",
      desc: "Découvrez les derniers smartphones, ordinateurs et accessoires avec une qualité exceptionnelle et des prix imbattables.",
      cta: "Découvrir la collection",
      image: "/images/hero-devices.jpg"
    },
    {
      badge: "Offre Exclusive",
      title: "Performances Pro\npour Créateurs",
      desc: "Une sélection d'ordinateurs portables et d'écrans haute fidélité pour accélérer vos projets d'ingénierie et de développement.",
      cta: "Explorer les Ordinateurs",
      image: "/images/promo-banner.jpg"
    }
  ];

  const current = slides[activeSlide];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="tn-hero-section" aria-label="Bannière principale">
      <div className="tn-hero-card">
        {/* Carousel arrows */}
        <button
          type="button"
          className="tn-carousel-arrow arrow-left"
          onClick={handlePrev}
          aria-label="Diapositive précédente"
        >
          ‹
        </button>
        <button
          type="button"
          className="tn-carousel-arrow arrow-right"
          onClick={handleNext}
          aria-label="Diapositive suivante"
        >
          ›
        </button>

        <div className="tn-hero-grid">
          {/* Left Column: Text & Features */}
          <div className="tn-hero-text">
            <span className="tn-hero-badge">
              <span className="tn-badge-star">✦</span> {current.badge}
            </span>

            <h1 className="tn-hero-title">
              {current.title.split('\n').map((line, i) => (
                <span key={i} className="tn-title-line">
                  {line}
                  <br />
                </span>
              ))}
            </h1>

            <p className="tn-hero-desc">{current.desc}</p>

            <div className="tn-hero-cta-wrapper">
              <a href="#catalogue" className="tn-btn-primary" onClick={onExploreClick}>
                <span>{current.cta}</span>
                <span className="tn-cta-arrow">›</span>
              </a>
            </div>

            {/* 3 Trust Features Strip */}
            <div className="tn-hero-features">
              <div className="tn-hero-feat-item">
                <span className="tn-feat-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </span>
                <div className="tn-feat-text">
                  <strong>Livraison rapide</strong>
                  <span>en 24/48h</span>
                </div>
              </div>

              <div className="tn-hero-feat-item">
                <span className="tn-feat-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </span>
                <div className="tn-feat-text">
                  <strong>Paiement sécurisé</strong>
                  <span>100% fiable</span>
                </div>
              </div>

              <div className="tn-hero-feat-item">
                <span className="tn-feat-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                </span>
                <div className="tn-feat-text">
                  <strong>Service client</strong>
                  <span>dédié 7j/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="tn-hero-media">
            <div className="tn-hero-img-wrapper">
              <img
                src={current.image}
                alt="TechNova appareils connectés"
                className="tn-hero-img"
              />
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="tn-carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`tn-dot ${activeSlide === index ? 'active' : ''}`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Aller à la diapositive ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
