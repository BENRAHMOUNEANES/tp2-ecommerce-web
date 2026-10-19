import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../redux/cartActions';

export default function CartDrawer({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

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

  const FREE_SHIPPING_THRESHOLD = 2000;
  const isFreeShipping = totalAmount >= FREE_SHIPPING_THRESHOLD;
  const shippingFee = items.length === 0 || isFreeShipping ? 0 : 350;
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

  const formatDA = (val) =>
    val.toLocaleString('fr-FR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + ' DA';

  if (!isOpen) return null;

  return (
    <div className="tn-drawer-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Panier d'achats">
      <div className="tn-drawer-panel" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="tn-drawer-header">
          <div className="tn-drawer-title-group">
            <h3>Votre Panier</h3>
            <span className="tn-drawer-badge">
              {totalQuantity} {totalQuantity <= 1 ? 'article' : 'articles'}
            </span>
          </div>
          <button
            type="button"
            className="tn-drawer-close"
            onClick={onClose}
            aria-label="Fermer le panier"
          >
            ×
          </button>
        </div>

        {/* Free Shipping Meter */}
        {items.length > 0 && (
          <div className="tn-shipping-meter">
            {isFreeShipping ? (
              <p className="tn-meter-success">🎉 Félicitations ! Vous bénéficiez de la <strong>Livraison GRATUITE</strong> !</p>
            ) : (
              <p className="tn-meter-info">
                Ajoutez encore <strong>{formatDA(remainingForFree)}</strong> pour la <strong>Livraison Gratuite</strong>
              </p>
            )}
            <div className="tn-meter-track">
              <div
                className="tn-meter-bar"
                style={{
                  width: `${Math.min(100, (totalAmount / FREE_SHIPPING_THRESHOLD) * 100)}%`
                }}
              />
            </div>
          </div>
        )}

        {/* Body content */}
        <div className="tn-drawer-body">
          {checkoutSuccess ? (
            <div className="tn-checkout-success">
              <div className="tn-success-checkmark">✓</div>
              <h4>Commande validée avec succès !</h4>
              <p>Simulation du processus de commande pour le projet ENSTA WAMD.</p>
              <span className="tn-success-meta">Votre panier Redux a été réinitialisé.</span>
            </div>
          ) : items.length === 0 ? (
            <div className="tn-drawer-empty">
              <div className="tn-empty-bag-icon">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <h4>Votre panier est vide</h4>
              <p>Découvrez notre sélection de smartphones, ordinateurs et accessoires high-tech.</p>
              <button
                type="button"
                className="tn-btn-primary"
                onClick={onClose}
              >
                Explorer la boutique
              </button>
            </div>
          ) : (
            <div className="tn-drawer-items-list">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {items.length > 0 && !checkoutSuccess && (
          <div className="tn-drawer-footer">
            <div className="tn-summary-row">
              <span className="tn-summary-label">Sous-total</span>
              <span className="tn-summary-value">{formatDA(totalAmount)}</span>
            </div>
            <div className="tn-summary-row">
              <span className="tn-summary-label">Livraison estimée</span>
              <span className="tn-summary-value">
                {isFreeShipping ? (
                  <span className="tn-free-badge">GRATUITE</span>
                ) : (
                  formatDA(shippingFee)
                )}
              </span>
            </div>
            <div className="tn-summary-row tn-summary-total">
              <span className="tn-summary-label">Total TTC</span>
              <span className="tn-summary-value">{formatDA(grandTotal)}</span>
            </div>

            <div className="tn-drawer-actions">
              <button
                type="button"
                className="tn-btn-checkout"
                onClick={handleCheckout}
              >
                Valider la commande • {formatDA(grandTotal)}
              </button>
              <button
                type="button"
                className="tn-btn-clear"
                onClick={() => dispatch(clearCart())}
              >
                Vider le panier
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
