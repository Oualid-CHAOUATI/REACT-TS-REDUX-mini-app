import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slices/cart-slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export type TStoreDispatch = typeof store.dispatch;
export type TStoreState = ReturnType<typeof store.getState>;
