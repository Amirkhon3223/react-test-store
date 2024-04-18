import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const ProductCartSlice = createSlice({
  name: "productCard",
  initialState,
  reducers: {
    openToggleCard: (state) => {
      state.isOpen = !state.isOpen;
    }
  },
});


export const { openToggleCard } = ProductCartSlice.actions;
export default ProductCartSlice.reducer;