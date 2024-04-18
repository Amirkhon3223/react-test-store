import { configureStore } from "@reduxjs/toolkit";
import productCartSlice from "./Slice/ProductCartState";
import cartSlice from "./Slice/CartState";
import ProductsSlice from "./Slice/ProductsSlice.tsx";

export const store = configureStore({
  reducer: {
    productCard: productCartSlice,
    card: cartSlice,
    products: ProductsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
