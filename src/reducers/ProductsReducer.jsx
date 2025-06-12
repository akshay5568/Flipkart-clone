import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  products: [], 
  cart: [],
  isLogin : false,
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

    setToCart : (state,action) => {
      state.cart = action.payload;
    },

    removeCarts: (state, action) => {
      state.cart = state.cart.filter(item =>  item._id !== action.payload);
    },

    setLogin : (state , action ) => {
      state.isLogin = action.payload;
    }
  },
});

export const { addToCart, removeCarts, setProducts , setLogin , setToCart} = ProductsReducer.actions;
export default ProductsReducer.reducer;
