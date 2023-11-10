import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TCartItem = {
  id: string;
  title: string;
  price: number;
};

type TCartState = {
  items: Array<TCartItem & { quantity: number }>;
};

const INITIAL_STATE: TCartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart(state, action: PayloadAction<TCartItem>) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) item.quantity++;
      else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart(state, action: PayloadAction<{ id: string }>) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        if (--item.quantity === 0) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// addToCart({ id: "1", price: 1, title: "title" });
