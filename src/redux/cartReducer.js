import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_CART
} from './actionTypes';

const calculateTotals = (items) => {
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return {
    totalQuantity,
    totalAmount: Number(totalAmount.toFixed(2)),
  };
};

const loadInitialItems = () => {
  try {
    const saved = localStorage.getItem('dztech_cart');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const initialItems = loadInitialItems();
const initialTotals = calculateTotals(initialItems);

const initialState = {
  items: initialItems,
  totalQuantity: initialTotals.totalQuantity,
  totalAmount: initialTotals.totalAmount,
};

export default function cartReducer(state = initialState, action) {
  let updatedItems;

  switch (action.type) {
    // Add product to cart or increment quantity if already present
    case ADD_TO_CART: {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        if (product.stock && existingItem.quantity >= product.stock) {
          return state;
        }
        updatedItems = state.items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedItems = [...state.items, { ...product, quantity: 1 }];
      }

      return {
        ...state,
        items: updatedItems,
        ...calculateTotals(updatedItems),
      };
    }

    // Remove product completely from cart by id
    case REMOVE_FROM_CART: {
      updatedItems = state.items.filter((item) => item.id !== action.payload);
      return {
        ...state,
        items: updatedItems,
        ...calculateTotals(updatedItems),
      };
    }

    // Increase item quantity by 1
    case INCREASE_QUANTITY: {
      updatedItems = state.items.map((item) => {
        if (item.id === action.payload) {
          if (item.stock && item.quantity >= item.stock) return item;
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      return {
        ...state,
        items: updatedItems,
        ...calculateTotals(updatedItems),
      };
    }

    // Decrease item quantity by 1, or remove if quantity reaches 0
    case DECREASE_QUANTITY: {
      updatedItems = state.items
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

      return {
        ...state,
        items: updatedItems,
        ...calculateTotals(updatedItems),
      };
    }

    // Reset shopping cart to empty state
    case CLEAR_CART: {
      return {
        ...state,
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
      };
    }

    default:
      return state;
  }
}
