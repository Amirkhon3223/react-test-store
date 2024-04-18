import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from "../../api/FetchProducts";
import { Products } from "../../models/interfaces.ts";


interface ProductsState {
  products: Products[];
  status: 'idle' | 'loading' | 'failed';
  error?: string;
}

const initialState: ProductsState = {
  products: [],
  status: 'idle',
};

export const loadProducts = createAsyncThunk('products/load', async () => {
  const products = await fetchProducts();
  return products;
});


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
