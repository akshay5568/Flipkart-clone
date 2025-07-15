import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  cart: [],
  isLogin: false,
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

    setToCart: (state, action) => {
      state.cart = action.payload;
    },

    removeCarts: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },

    setLogin: (state, action) => {
      state.isLogin = action.payload;
    },

    incQty:(state, action) => {
        const {_id} = action.payload;
        const item = state.cart.find((item) => item._id == _id);
        item.qty += 1;
    },

    decQty:(state,action) => {
       const {_id} = action.payload;
       const item = state.cart.find((item) => item._id == _id);
       item.qty -= 1;
    }

  },
});

export const { addToCart, removeCarts, setProducts, setLogin, setToCart , incQty , decQty} =
  ProductsReducer.actions;
export default ProductsReducer.reducer;
