import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartActions';

export default function ProductCard({ product, onToast }) {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Check how many of this item are already in the cart
  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.id === product.id)
  );
  const currentInCart = cartItem ? cartItem.quantity : 0;
  const isOutOfStock = product.stock <= 0 || currentInCart >= product.stock;

  const handleAddToCart = () => {
    if (isOutOfStock) return;

    dispatch(addToCart(product));
    setIsAdded(true);
    if (onToast) {
      onToast(`Added "${product.name}" to cart`);
    }

    setTimeout(() => {
      setIsAdded(false);
    }, 1200);
  };

  return (
    <article className="product-card">
      {/* Thumbnail area with badge */}
      <div className="product-media">
        {product.badge && (
          <span className={`product-flag flag-${product.badge.toLowerCase().replace(/[^a-z]/g, '')}`}>
            {product.badge}
          </span>
        )}
        <img
          src={
            imgError
              ? `https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=700&q=80`
              : product.image
          }
          alt={product.name}
          className="product-img"
          loading="lazy"
          onError={() => setImgError(true)}
        />
        <span className="product-category-tag">{product.category}</span>
      </div>

      {/* Card Content */}
      <div className="product-body">
        {/* Rating and Reviews */}
        <div className="product-meta">
          <div className="product-rating" aria-label={`Rated ${product.rating} out of 5 stars`}>
            <span className="star-icon">★</span>
            <span className="rating-value">{product.rating}</span>
            <span className="reviews-count">({product.reviews})</span>
          </div>
          <span className={`stock-status ${product.stock <= 5 ? 'stock-low' : 'stock-ok'}`}>
            {product.stock <= 5 ? `Only ${product.stock} left` : `${product.stock} in stock`}
          </span>
        </div>

        <h3 className="product-title">{product.name}</h3>
        <p className="product-desc">{product.description}</p>

        {/* Footer: Price + Add Button */}
        <div className="product-footer">
          <div className="price-block">
            <span className="price-currency">$</span>
            <span className="price-amount">{product.price.toFixed(2)}</span>
          </div>

          <button
            type="button"
            className={`add-cart-btn ${isAdded ? 'btn-success' : ''} ${isOutOfStock ? 'btn-disabled' : ''}`}
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            aria-label={`Add ${product.name} to cart`}
          >
            {isAdded ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Added</span>
              </>
            ) : isOutOfStock ? (
              <span>Max in Cart</span>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
