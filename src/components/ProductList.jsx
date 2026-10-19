import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products, onResetFilters, onToast }) {
  if (products.length === 0) {
    return (
      <section className="product-list-empty" aria-label="No Products Found">
        <div className="empty-state-box">
          <div className="empty-icon-circle">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </div>
          <h3>No products match your criteria</h3>
          <p>Try adjusting your search keywords, clearing filters, or browsing other categories.</p>
          <button
            type="button"
            className="btn-primary"
            onClick={onResetFilters}
          >
            Clear All Filters
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="catalog" className="product-grid-section" aria-label="Product Catalog">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onToast={onToast}
          />
        ))}
      </div>
    </section>
  );
}
