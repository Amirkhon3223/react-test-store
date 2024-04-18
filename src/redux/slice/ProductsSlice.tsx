/**
 * @fileoverview Управление состоянием данных о продуктах в приложении с использованием Redux Toolkit.
 * Включает асинхронные действия для получения данных о продуктах и обновления состояния Redux.
 *
 * @module ProductsSlice
 */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from "../../api/FetchProducts";
import { Products } from "../../models/interfaces.ts";

interface ProductsState {
  products: Products[];
  status: 'idle' | 'loading' | 'failed';
  error?: string;
}

/**
 * Начальное состояние сегмента данных о продуктах.
 */
const initialState: ProductsState = {
  products: [],
  status: 'idle',
};

/**
 * Асинхронное действие thunk для загрузки продуктов из удаленного источника.
 */
export const loadProducts = createAsyncThunk(
  'products/load',
  async (): Promise<Products[]> => {
    const response = await fetchProducts();
    return response.data || [];
  }
);

/**
 * Slice для управления данными о продуктах, включая его редьюсеры и действия.
 */
const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = 'idle';
      })
      .addCase(loadProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default ProductsSlice.reducer;
