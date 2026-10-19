import React from 'react';

export default function Footer() {
  return (
    <footer id="about" className="footer-root">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand & Mission */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <span className="brand-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </span>
              <span className="brand-name">DzTech Store</span>
            </div>
            <p className="footer-tagline">
              Curated electronics and computing gear engineered for students, developers, and tech creators.
            </p>
            <div className="tech-pills">
              <span className="tech-pill">React 18</span>
              <span className="tech-pill">Redux Toolkit</span>
              <span className="tech-pill">Vite</span>
              <span className="tech-pill">Pure CSS</span>
            </div>
          </div>

          {/* Academic Context */}
          <div className="footer-col lab-col">
            <h4 className="footer-heading">Academic Project</h4>
            <ul className="footer-links-list">
              <li><strong>Institution:</strong> ENSTA</li>
              <li><strong>Module:</strong> Web and Mobile Development (WAMD)</li>
              <li><strong>Lab:</strong> TD-TP 2 (React & Redux State Management)</li>
              <li><strong>Student:</strong> Anes Benrahmoune</li>
            </ul>
          </div>

          {/* Redux Architecture Features */}
          <div className="footer-col arch-col" id="features">
            <h4 className="footer-heading">State Architecture</h4>
            <ul className="footer-links-list">
              <li>Centralized Redux Store with <code>configureStore</code></li>
              <li>Predictable Pure Reducer with <code>switch/case</code></li>
              <li>Typed Actions: <code>ADD</code>, <code>REMOVE</code>, <code>UPDATE_QTY</code></li>
              <li>Hooks: <code>useSelector</code> & <code>useDispatch</code></li>
              <li>Synchronized <code>localStorage</code> persistence</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} DzTech Store • Built for ENSTA WAMD Lab. All rights reserved.</p>
          <p className="footer-credit">Crafted with React & Redux by Anes Benrahmoune</p>
        </div>
      </div>
    </footer>
  );
}
