import React, { useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductList({
  products,
  selectedCategory,
  onResetFilters,
  onToast
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const displayedProducts = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : Math.max(0, totalPages - 1)));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <section id="catalogue" className="tn-section tn-products-section">
      <div className="tn-container">
        {/* Section Header */}
        <div className="tn-section-header">
          <div className="tn-section-titles">
            <span className="tn-section-kicker">— PRODUITS PHARES</span>
            <h2 className="tn-section-title">
              {selectedCategory && selectedCategory !== 'All'
                ? `Les meilleures ventes • ${selectedCategory}`
                : 'Les meilleures ventes'}
            </h2>
          </div>

          {totalPages > 1 && (
            <div className="tn-carousel-nav-arrows">
              <button
                type="button"
                className="tn-arrow-btn"
                onClick={handlePrevPage}
                aria-label="Produits précédents"
              >
                ‹
              </button>
              <button
                type="button"
                className="tn-arrow-btn"
                onClick={handleNextPage}
                aria-label="Produits suivants"
              >
                ›
              </button>
            </div>
          )}
        </div>

        {/* Empty State */}
        {products.length === 0 ? (
          <div className="tn-empty-catalog">
            <div className="tn-empty-icon">🔍</div>
            <h3>Aucun produit trouvé</h3>
            <p>Essayez de modifier votre recherche ou de réinitialiser les filtres de catégorie.</p>
            <button
              type="button"
              className="tn-btn-primary"
              onClick={onResetFilters}
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="tn-products-grid">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onToast={onToast}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
