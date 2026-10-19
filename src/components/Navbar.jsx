import React from 'react';
import { useSelector } from 'react-redux';

export default function Navbar({ onOpenCart, onSearchFocus }) {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="navbar-root">
      <div className="navbar-container">
        {/* Brand Logo & Badge */}
        <div className="navbar-brand">
          <a href="#" className="brand-logo" aria-label="DzTech Store Home">
            <span className="brand-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </span>
            <span className="brand-name">DzTech<span className="brand-accent">.</span></span>
          </a>
          <span className="brand-badge">ENSTA • WAMD Lab 2</span>
        </div>

        {/* Center Navigation Links */}
        <nav className="navbar-nav" aria-label="Main Navigation">
          <a href="#catalog" className="nav-link active">Catalog</a>
          <a href="#features" className="nav-link">Architecture</a>
          <a href="#about" className="nav-link">Lab Info</a>
        </nav>

        {/* Actions (Cart trigger & CTA) */}
        <div className="navbar-actions">
          <button
            type="button"
            className="cart-btn"
            onClick={onOpenCart}
            aria-label={`Shopping cart containing ${totalQuantity} items`}
          >
            <span className="cart-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              {totalQuantity > 0 && (
                <span className="cart-badge" key={totalQuantity}>
                  {totalQuantity}
                </span>
              )}
            </span>
            <span className="cart-btn-label">Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
}
