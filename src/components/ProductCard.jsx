import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartActions';

export default function ProductCard({ product, onToast }) {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Read item count already in Redux cart
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
      onToast(`"${product.name}" a été ajouté au panier !`);
    }

    setTimeout(() => {
      setIsAdded(false);
    }, 1200);
  };

  const formattedPrice = product.price.toLocaleString('fr-FR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedOldPrice = product.oldPrice
    ? product.oldPrice.toLocaleString('fr-FR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : null;

  return (
    <article className="tn-product-card">
      {/* Top row: discount badge + wishlist toggle */}
      <div className="tn-card-top-row">
        {product.discount ? (
          <span className="tn-discount-pill">{product.discount}</span>
        ) : (
          <span />
        )}

        <button
          type="button"
          className={`tn-wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={() => setIsWishlisted(!isWishlisted)}
          aria-label="Ajouter aux favoris"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={isWishlisted ? '#ef4444' : 'none'} stroke={isWishlisted ? '#ef4444' : 'currentColor'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* Product Image */}
      <div className="tn-card-media">
        <img
          src={
            imgError
              ? 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=500&q=80'
              : product.image
          }
          alt={product.name}
          className="tn-card-img"
          loading="lazy"
          onError={() => setImgError(true)}
        />
      </div>

      {/* Product Info */}
      <div className="tn-card-info">
        <h3 className="tn-card-title">{product.name}</h3>

        {/* Rating stars & review count */}
        <div className="tn-card-rating">
          <div className="tn-stars" aria-label={`Note : ${product.rating} sur 5`}>
            {'★★★★★'.slice(0, Math.round(product.rating))}
          </div>
          <span className="tn-rating-count">({product.reviews})</span>
        </div>

        {/* Price display with DA */}
        <div className="tn-card-pricing">
          <span className="tn-price-current">{formattedPrice} DA</span>
          {formattedOldPrice && (
            <span className="tn-price-old">{formattedOldPrice} DA</span>
          )}
        </div>

        {/* Action Button: Ajouter au panier */}
        <button
          type="button"
          className={`tn-add-cart-btn ${isAdded ? 'added' : ''} ${isOutOfStock ? 'disabled' : ''}`}
          onClick={handleAddToCart}
          disabled={isOutOfStock}
          aria-label={`Ajouter ${product.name} au panier`}
        >
          <span className="tn-btn-cart-icon">
            {isAdded ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            )}
          </span>
          <span>
            {isAdded ? 'Ajouté !' : isOutOfStock ? 'Stock épuisé' : 'Ajouter au panier'}
          </span>
        </button>
      </div>
    </article>
  );
}
