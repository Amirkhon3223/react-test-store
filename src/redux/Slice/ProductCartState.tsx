import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const ProductCartState = createSlice({
  name: "productCard",
  initialState,
  reducers: {
    openToggleCard: (state) => {
      state.isOpen = !state.isOpen;
    }
  },
});


export const { openToggleCard } = ProductCartState.actions;
export default ProductCartState.reducer;