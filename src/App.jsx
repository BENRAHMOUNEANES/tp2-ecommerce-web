import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from './data/products';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategoriesSection from './components/CategoriesSection';
import ProductList from './components/ProductList';
import PromoBanner from './components/PromoBanner';
import TrustBar from './components/TrustBar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Toast from './components/Toast';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [toastMessage, setToastMessage] = useState(null);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
  };

  // Filter products by search query and category
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

    if (selectedCategory && selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    return result;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="tn-app">
      {/* Header & Navigation */}
      <Navbar
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="tn-main">
        {/* Hero Section */}
        <HeroSection
          onExploreClick={() => setSelectedCategory('All')}
        />

        {/* Categories Section */}
        <CategoriesSection
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Best Sellers / Products Section */}
        <ProductList
          products={filteredProducts}
          selectedCategory={selectedCategory}
          onResetFilters={handleResetFilters}
          onToast={triggerToast}
        />

        {/* Special Promo Banner */}
        <PromoBanner
          onOfferClick={() => setSelectedCategory('All')}
        />

        {/* 4 Guarantees / Trust Bar */}
        <TrustBar />
      </main>

      {/* Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      {/* Floating Feedback Notification */}
      <Toast
        message={toastMessage}
        onDismiss={() => setToastMessage(null)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
