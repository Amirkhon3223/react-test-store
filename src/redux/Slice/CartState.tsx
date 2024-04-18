import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../models/interfaces";

interface CartState {
  cartItems: CartItem[];
  total: number;
}

const initialState: CartState = {
  cartItems: [],
  total: 0,
};


const updateTotal = (cartItems: CartItem[]) =>
  cartItems.reduce((total, item) => total + item.price * item.amount, 0);

const cartState = createSlice({

  name: "card",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.amount += 1;
      } else {
        state.cartItems.push({ ...action.payload, amount: 1 });
      }
      state.total = updateTotal(state.cartItems);
    },
    increase: (state, action: PayloadAction<CartItem>) => {
      const item = state.cartItems.find(item => item.id === action.payload.id);
      if (item) {
        item.amount += 1;
      }
      state.total = updateTotal(state.cartItems);
    },
    decrease: (state, action: PayloadAction<CartItem>) => {
      const item = state.cartItems.find(item => item.id === action.payload.id);
      if (item) {
        item.amount -= 1;
        if (item.amount === 0) {
          state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
        }
      }
      state.total = updateTotal(state.cartItems);
    },
    remove: (state, action: PayloadAction<CartItem>) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      state.total = updateTotal(state.cartItems);
    },
  },
});

export const { add, increase, decrease, remove } = cartState.actions;
export default cartState.reducer;
