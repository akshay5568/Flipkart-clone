import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  products: [],
   
  cart: [],
};

export const ProductsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },

    removeCarts: (state, action) => {
      state.cart = state.cart.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addToCart, removeCarts, setProducts } = ProductsReducer.actions;
export default ProductsReducer.reducer;
