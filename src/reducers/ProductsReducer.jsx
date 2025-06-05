import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/v/p/3/-original-imah8bfrrurageu2.jpeg?q=70",
      title: "TRIGGR Kraken X1 with Battery Display, 40ms Latency, Qu...",
      price: 899,
      discount: 89,
      details: "Black, True Wireless",
      catyegorys: "Electronics",
      id: 1,
    },
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/r/r/-original-imah9khh8wgzdafb.jpeg?q=70",
      title: "Apple iPhone 16e (White, 128 GB)",
      price: 54900,
      discount: 8,
      details:
        "iPhone 16e is built for Apple Intelligence and powered by the A18 chip.",
      catyegorys: "Mobiles",
      id: 2,
    },
    {
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/0/d/h/m-fsmtsrt-2039-kajaru-original-imah9habm3fzhbmn.jpeg?q=70",
      title: "Men Self Design Round Neck Polyester Dark Green T-Shirt",
      price: 299,
      discount: 70,
      details: "KAJARU",
      catyegorys: "Fashion",
      id: 3,
    },
  ],

  cart: [],
};

export const ProductsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      console.log(state.cart);
    },
    removeCarts: (state, action) => {
      state.cart = state.cart.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addToCart, removeCarts } = ProductsReducer.actions;
export default ProductsReducer.reducer;
