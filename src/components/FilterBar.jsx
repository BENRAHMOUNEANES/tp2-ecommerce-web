import React from 'react';

export default function FilterBar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  categories,
  sortBy,
  onSortChange,
  inStockOnly,
  onToggleInStock,
  resultCount,
  onResetFilters
}) {
  return (
    <section className="filter-section" aria-label="Product Search and Filters">
      <div className="filter-container">
        {/* Top bar: Search input + Sort options + In-stock toggle */}
        <div className="filter-controls-row">
          <div className="search-input-wrapper">
            <span className="search-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="text"
              id="search-input"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search gear (e.g. keyboard, 4K, audio, charger)..."
              className="search-input"
              aria-label="Search products"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => onSearchChange('')}
                aria-label="Clear search input"
              >
                ×
              </button>
            )}
          </div>

          <div className="filter-right-controls">
            <label className="filter-toggle">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => onToggleInStock(e.target.checked)}
              />
              <span className="toggle-label">In Stock Only</span>
            </label>

            <div className="sort-wrapper">
              <label htmlFor="sort-select" className="sr-only">Sort products</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="sort-select"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="category-pills-row" role="tablist" aria-label="Product Categories">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`category-pill ${isActive ? 'active' : ''}`}
                onClick={() => onSelectCategory(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Results summary & reset */}
        <div className="filter-status-row">
          <span className="results-count">
            Showing <strong>{resultCount}</strong> {resultCount === 1 ? 'item' : 'items'}
          </span>
          {(searchQuery || selectedCategory !== 'All' || inStockOnly || sortBy !== 'featured') && (
            <button
              type="button"
              className="reset-filters-btn"
              onClick={onResetFilters}
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
