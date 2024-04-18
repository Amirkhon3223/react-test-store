import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import productCartSlice from "./slice/ProductCartSlice";
import cartSlice from "./slice/CartSlice";
import ProductsSlice from "./slice/ProductsSlice";

export const store = configureStore({
  reducer: {
    card: cartSlice,
    productCard: productCartSlice,
    products: ProductsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;