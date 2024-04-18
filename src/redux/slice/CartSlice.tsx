/**
 * @fileoverview Модуль для управления состоянием корзины в приложении.
 * Определяет слайс Redux с операциями для добавления, увеличения, уменьшения и удаления товаров из корзины.
 *
 * @module CartSlice Управление состоянием корзины.
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartSlice } from "../../models/interfaces";


const initialState: CartSlice = {
  cartItems: [],
  total: 0,
};

/**
 * Вычисляет общую сумму стоимости товаров в корзине.
 * {CartItem[]} cartItems Массив товаров в корзине.
 * returns {number} Общая сумма стоимости.
 */

const updateTotal = (cartItems: CartItem[]) =>
  cartItems.reduce((total, item) => total + item.price * item.amount, 0);


const cartState = createSlice({
  name: "card",
  initialState,
  reducers: {
    /**
     * Добавляет товар в корзину или увеличивает его количество.
     * {PayloadAction<>} action Действие с товаром для добавления.
     */
    add: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.amount += 1;
      } else {
        state.cartItems.push({ ...action.payload, amount: 1 });
      }
      state.total = updateTotal(state.cartItems);
    },

    /**
     * Увеличивает количество конкретного товара в корзине.
     * {PayloadAction<CartItem>} action Действие с товаром для увеличения.
     */
    increase: (state, action: PayloadAction<CartItem>) => {
      const item = state.cartItems.find(item => item.id === action.payload.id);
      if (item) {
        item.amount += 1;
      }
      state.total = updateTotal(state.cartItems);
    },

    /**
     * Уменьшает количество конкретного товара в корзине или удаляет его, если количество становится нулевым.
     * {PayloadAction<CartItem>} action Действие с товаром для уменьшения.
     */
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

    /**
     * Удаляет товар из корзины.
     * {PayloadAction<CartItem>} action Действие с товаром для удаления.
     */
    remove: (state, action: PayloadAction<CartItem>) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      state.total = updateTotal(state.cartItems);
    },
  },
});

export const { add, increase, decrease, remove } = cartState.actions;
export default cartState.reducer;
