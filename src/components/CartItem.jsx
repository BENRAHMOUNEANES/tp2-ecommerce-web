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

  return (
    <div className="cart-item-row">
      {/* Thumbnail */}
      <div className="cart-item-thumb">
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

      {/* Info */}
      <div className="cart-item-details">
        <div className="cart-item-header">
          <span className="cart-item-cat">{item.category}</span>
          <h4 className="cart-item-title">{item.name}</h4>
        </div>
        <div className="cart-item-unit-price">
          ${item.price.toFixed(2)} each
        </div>

        {/* Quantity Controls and Remove */}
        <div className="cart-item-actions">
          <div className="stepper" role="group" aria-label={`Quantity for ${item.name}`}>
            <button
              type="button"
              className="stepper-btn"
              onClick={() => dispatch(decreaseQuantity(item.id))}
              aria-label={`Decrease quantity of ${item.name}`}
            >
              −
            </button>
            <span className="stepper-val" aria-live="polite">
              {item.quantity}
            </span>
            <button
              type="button"
              className="stepper-btn"
              onClick={() => dispatch(increaseQuantity(item.id))}
              disabled={isAtMaxStock}
              aria-label={`Increase quantity of ${item.name}`}
            >
              +
            </button>
          </div>

          <button
            type="button"
            className="cart-remove-btn"
            onClick={() => dispatch(removeFromCart(item.id))}
            aria-label={`Remove ${item.name} from cart`}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
            <span>Remove</span>
          </button>
        </div>
      </div>

      {/* Line Subtotal */}
      <div className="cart-item-total">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
}
