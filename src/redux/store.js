import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Sync cart state with localStorage
store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem('dztech_cart', JSON.stringify(state.cart.items));
  } catch {
    // Ignore storage quota errors
  }
});

export default store;
