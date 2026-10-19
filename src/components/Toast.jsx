import React from 'react';

export default function Toast({ message, onDismiss }) {
  if (!message) return null;

  return (
    <div className="toast-notification" role="status" aria-live="polite">
      <div className="toast-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <span className="toast-text">{message}</span>
      <button
        type="button"
        className="toast-close"
        onClick={onDismiss}
        aria-label="Dismiss toast"
      >
        ×
      </button>
    </div>
  );
}
