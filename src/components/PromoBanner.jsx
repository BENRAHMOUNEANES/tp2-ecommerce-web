import React from 'react';

export default function PromoBanner({ onOfferClick }) {
  return (
    <section className="tn-section tn-promo-section" aria-label="Offre promotionnelle">
      <div className="tn-container">
        <div className="tn-promo-card">
          {/* Left Text */}
          <div className="tn-promo-content">
            <span className="tn-promo-badge">Offre spéciale</span>
            <h3 className="tn-promo-title">
              Jusqu'à -20%
              <br />
              sur une sélection de produits
            </h3>
            <p className="tn-promo-desc">
              Équipez-vous avec les meilleures marques et profitez de nos offres limitées !
            </p>
            <div>
              <a href="#catalogue" className="tn-promo-btn" onClick={onOfferClick}>
                <span>Voir l'offre</span>
                <span className="tn-promo-btn-arrow">›</span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="tn-promo-media">
            <img
              src="/images/promo-banner.jpg"
              alt="Offre spéciale ordinateurs et accessoires"
              className="tn-promo-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
