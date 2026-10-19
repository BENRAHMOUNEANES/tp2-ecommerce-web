import React from 'react';

export default function CategoriesSection({
  categories,
  selectedCategory,
  onSelectCategory
}) {
  return (
    <section id="categories" className="tn-section tn-categories-section">
      <div className="tn-container">
        {/* Section Header */}
        <div className="tn-section-header">
          <div className="tn-section-titles">
            <span className="tn-section-kicker">— NOS CATÉGORIES</span>
            <h2 className="tn-section-title">Parcourir par catégorie</h2>
          </div>
          <button
            type="button"
            className="tn-view-all-link"
            onClick={() => onSelectCategory('All')}
          >
            <span>Voir toutes les catégories</span>
            <span className="tn-link-arrow">→</span>
          </button>
        </div>

        {/* Categories Grid */}
        <div className="tn-categories-grid">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.name;
            return (
              <button
                key={cat.id}
                type="button"
                className={`tn-cat-card ${isSelected ? 'active' : ''}`}
                onClick={() => onSelectCategory(isSelected ? 'All' : cat.name)}
                aria-pressed={isSelected}
              >
                <div className="tn-cat-thumb">
                  <img src={cat.image} alt={cat.name} loading="lazy" />
                </div>
                <span className="tn-cat-name">{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
