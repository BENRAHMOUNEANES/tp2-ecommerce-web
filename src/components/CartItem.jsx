import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from '../redux/cartActions';

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const [imgError, setImgError] = useState(false);

  const isAtMaxStock = item.stock && item.quantity >= item.stock;

  const formattedUnitPrice = item.price.toLocaleString('fr-FR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedTotal = (item.price * item.quantity).toLocaleString('fr-FR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="tn-cart-row">
      {/* Thumbnail */}
      <div className="tn-cart-thumb">
        <img
          src={
            imgError
              ? 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=200&q=80'
              : item.image
          }
          alt={item.name}
          onError={() => setImgError(true)}
        />
      </div>

      {/* Details */}
      <div className="tn-cart-info">
        <span className="tn-cart-cat">{item.category}</span>
        <h4 className="tn-cart-title">{item.name}</h4>
        <span className="tn-cart-unit-price">{formattedUnitPrice} DA l'unité</span>

        {/* Stepper + Remove */}
        <div className="tn-cart-actions-row">
          <div className="tn-stepper">
            <button
              type="button"
              className="tn-stepper-btn"
              onClick={() => dispatch(decreaseQuantity(item.id))}
              aria-label="Diminuer la quantité"
            >
              −
            </button>
            <span className="tn-stepper-value">{item.quantity}</span>
            <button
              type="button"
              className="tn-stepper-btn"
              onClick={() => dispatch(increaseQuantity(item.id))}
              disabled={isAtMaxStock}
              aria-label="Augmenter la quantité"
            >
              +
            </button>
          </div>

          <button
            type="button"
            className="tn-cart-remove"
            onClick={() => dispatch(removeFromCart(item.id))}
            aria-label="Supprimer cet article"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
            <span>Supprimer</span>
          </button>
        </div>
      </div>

      {/* Line Total */}
      <div className="tn-cart-row-total">
        {formattedTotal} DA
      </div>
    </div>
  );
}
