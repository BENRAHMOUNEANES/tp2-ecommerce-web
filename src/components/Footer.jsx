import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer id="apropos" className="tn-footer">
      <div className="tn-container">
        <div className="tn-footer-grid">
          {/* Brand Col */}
          <div className="tn-footer-col brand-col">
            <div className="tn-footer-logo">
              <span className="tn-logo-icon light">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </span>
              <span className="tn-footer-brand-name">TechNova</span>
            </div>
            <p className="tn-footer-tagline">Votre univers technologique</p>
            <div className="tn-footer-lab-badge">
              ENSTA • Module WAMD • TP-2 Redux (Anes Benrahmoune)
            </div>
          </div>

          {/* Links Col */}
          <div className="tn-footer-col">
            <h4 className="tn-footer-heading">Liens utiles</h4>
            <ul className="tn-footer-links">
              <li><a href="#">Accueil</a></li>
              <li><a href="#catalogue">Boutique</a></li>
              <li><a href="#apropos">À propos</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Socials Col */}
          <div className="tn-footer-col" id="contact">
            <h4 className="tn-footer-heading">Suivez-nous</h4>
            <div className="tn-social-links">
              {/* Facebook */}
              <a href="#" className="tn-social-btn" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="tn-social-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="tn-social-btn" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#092e27" />
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" className="tn-social-btn" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.7V16a7 7 0 1 1-7-7c.7 0 1.4.1 2 .3V12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter Col */}
          <div className="tn-footer-col newsletter-col">
            <h4 className="tn-footer-heading">Newsletter</h4>
            <p className="tn-newsletter-sub">Recevez nos nouveautés et offres spéciales</p>
            <form onSubmit={handleSubscribe} className="tn-newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse e-mail"
                className="tn-newsletter-input"
                required
              />
              <button type="submit" className="tn-newsletter-btn" aria-label="S'inscrire">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
            {subscribed && (
              <span className="tn-newsletter-success">Merci pour votre inscription !</span>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="tn-footer-bottom">
          <p className="tn-copyright">© 2025 TechNova. Tous droits réservés.</p>
          <div className="tn-legal-links">
            <a href="#">Conditions générales</a>
            <span className="tn-sep">|</span>
            <a href="#">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
