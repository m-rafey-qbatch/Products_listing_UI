import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartItem } from "../types";

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<CartItem>) => {
      const { id, name, price } = action.payload;
      console.log(id, name, price);
      const itemIndex = state.items?.findIndex(
        (item: CartItem) => item.id === id
      );

      itemIndex < 0
      ? state.items.push({ id, name, price, quantity: 1 })
      : (state.items[itemIndex].quantity += 1);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item && item.quantity > 0) {
        item.quantity--;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
