import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { PRODUCTS, CATEGORIES } from './data/products';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList';
import CartDrawer from './components/CartDrawer';
import Toast from './components/Toast';
import Footer from './components/Footer';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSortBy('featured');
    setInStockOnly(false);
  };

  // Filter and sort products based on user criteria
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (inStockOnly) {
      result = result.filter((p) => p.stock > 0);
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [searchQuery, selectedCategory, inStockOnly, sortBy]);

  return (
    <div className="app-container">
      {/* Navigation Header */}
      <Navbar
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="main-content">
        {/* Hero Section */}
        <section className="store-hero" aria-label="Store Hero Introduction">
          <div className="hero-content">
            <div className="hero-pill-badge">
              <span className="dot-indicator"></span>
              ENSTA WAMD • React & Redux Architecture
            </div>
            <h1 className="hero-title">
              Engineering-Grade Tech & Peripherals
            </h1>
            <p className="hero-description">
              DzTech Store showcases a high-performance frontend with centralized Redux state management.
              Browse realistic electronics, filter by category, and manage cart state with pure predictability.
            </p>
            <div className="hero-actions">
              <a href="#catalog" className="btn-hero-primary">
                Explore Catalog ({PRODUCTS.length} Items)
              </a>
              <button
                type="button"
                className="btn-hero-secondary"
                onClick={() => setIsCartOpen(true)}
              >
                View Cart ({cartTotalQuantity})
              </button>
            </div>
          </div>

          <div className="hero-stat-card">
            <div className="stat-item">
              <span className="stat-number">12</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item">
              <span className="stat-number">6</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Redux Managed</span>
            </div>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <FilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          categories={CATEGORIES}
          sortBy={sortBy}
          onSortChange={setSortBy}
          inStockOnly={inStockOnly}
          onToggleInStock={setInStockOnly}
          resultCount={filteredProducts.length}
          onResetFilters={handleResetFilters}
        />

        {/* Product Catalog Grid */}
        <ProductList
          products={filteredProducts}
          onResetFilters={handleResetFilters}
          onToast={triggerToast}
        />
      </main>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      {/* Floating Action Notifications */}
      <Toast
        message={toastMessage}
        onDismiss={() => setToastMessage(null)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
