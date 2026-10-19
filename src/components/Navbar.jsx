import React from 'react';
import { useSelector } from 'react-redux';

export default function Navbar({ onOpenCart, searchQuery, onSearchChange }) {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="tn-header">
      <div className="tn-container tn-header-inner">
        {/* Logo */}
        <a href="#" className="tn-logo" aria-label="TechNova Accueil">
          <span className="tn-logo-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </span>
          <span className="tn-logo-text">TechNova</span>
        </a>

        {/* Navigation links */}
        <nav className="tn-nav">
          <a href="#" className="tn-nav-link active">Accueil</a>
          <a href="#catalogue" className="tn-nav-link">Boutique</a>
          <div className="tn-nav-dropdown">
            <a href="#categories" className="tn-nav-link">
              Catégories <span className="tn-dropdown-arrow">▾</span>
            </a>
          </div>
          <a href="#apropos" className="tn-nav-link">À propos</a>
          <a href="#contact" className="tn-nav-link">Contact</a>
        </nav>

        {/* Right side: Search bar + Profile + Cart */}
        <div className="tn-header-actions">
          <div className="tn-search-bar">
            <span className="tn-search-icon">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Rechercher un produit..."
              className="tn-search-input"
              aria-label="Rechercher un produit"
            />
            {searchQuery && (
              <button
                type="button"
                className="tn-search-clear"
                onClick={() => onSearchChange('')}
                aria-label="Effacer la recherche"
              >
                ×
              </button>
            )}
          </div>

          <button type="button" className="tn-icon-btn" aria-label="Mon profil">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          <button
            type="button"
            className="tn-icon-btn tn-cart-trigger"
            onClick={onOpenCart}
            aria-label={`Panier contenant ${totalQuantity} articles`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {totalQuantity > 0 && (
              <span className="tn-cart-badge" key={totalQuantity}>
                {totalQuantity}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
