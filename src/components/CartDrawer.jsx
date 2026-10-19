import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../redux/cartActions';

export default function CartDrawer({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setCheckoutSuccess(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const FREE_SHIPPING_THRESHOLD = 150;
  const isFreeShipping = totalAmount >= FREE_SHIPPING_THRESHOLD;
  const shippingFee = items.length === 0 || isFreeShipping ? 0 : 9.99;
  const grandTotal = totalAmount + shippingFee;
  const remainingForFree = Math.max(0, FREE_SHIPPING_THRESHOLD - totalAmount);

  const handleCheckout = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      dispatch(clearCart());
      setCheckoutSuccess(false);
      onClose();
    }, 2400);
  };

  if (!isOpen) return null;

  return (
    <div className="cart-drawer-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Shopping Cart">
      <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-drawer-header">
          <div className="cart-drawer-title-group">
            <h3>Shopping Cart</h3>
            <span className="cart-drawer-badge">{totalQuantity} {totalQuantity === 1 ? 'item' : 'items'}</span>
          </div>
          <button
            type="button"
            className="cart-close-btn"
            onClick={onClose}
            aria-label="Close shopping cart"
          >
            ×
          </button>
        </div>

        {/* Free shipping threshold progress */}
        {items.length > 0 && (
          <div className="shipping-progress-box">
            {isFreeShipping ? (
              <p className="shipping-congrats">🎉 You unlocked <strong>FREE Standard Shipping</strong>!</p>
            ) : (
              <p className="shipping-reminder">
                Add <strong>${remainingForFree.toFixed(2)}</strong> more for <strong>FREE Shipping</strong>
              </p>
            )}
            <div className="shipping-progress-bar">
              <div
                className="shipping-progress-fill"
                style={{ width: `${Math.min(100, (totalAmount / FREE_SHIPPING_THRESHOLD) * 100)}%` }}
              />
            </div>
          </div>
        )}

        {/* Body content */}
        <div className="cart-drawer-body">
          {checkoutSuccess ? (
            <div className="checkout-success-view">
              <div className="success-icon-check">✓</div>
              <h4>Order Placed Successfully!</h4>
              <p>Simulated university lab checkout completed.</p>
              <p className="success-meta">Thank you for testing the Redux cart flow.</p>
            </div>
          ) : items.length === 0 ? (
            <div className="cart-empty-view">
              <div className="empty-cart-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </div>
              <h4>Your cart is empty</h4>
              <p>Explore our electronics catalog to add premium gear to your cart.</p>
              <button
                type="button"
                className="btn-primary"
                onClick={onClose}
              >
                Browse Catalog
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {items.length > 0 && !checkoutSuccess && (
          <div className="cart-drawer-footer">
            <div className="summary-row">
              <span className="summary-label">Subtotal</span>
              <span className="summary-value">${totalAmount.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Estimated Shipping</span>
              <span className="summary-value">
                {isFreeShipping ? <span className="free-tag">FREE</span> : `$${shippingFee.toFixed(2)}`}
              </span>
            </div>
            <div className="summary-row summary-grand-total">
              <span className="summary-label">Total (USD)</span>
              <span className="summary-value">${grandTotal.toFixed(2)}</span>
            </div>

            <div className="cart-drawer-actions">
              <button
                type="button"
                className="checkout-btn"
                onClick={handleCheckout}
              >
                Proceed to Checkout • ${grandTotal.toFixed(2)}
              </button>
              <button
                type="button"
                className="clear-cart-btn"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
