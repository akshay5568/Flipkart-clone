import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sellerProducts:[]
}

export const SellerProductsReducer = createSlice({
    name:"sellerProducts",
    initialState,
    reducers:{
        setSellerProducts:(state,action) => {
            state.sellerProducts = action.payload;
        },
        removeSellerProducts:(state,action) => {
            state.sellerProducts = state.sellerProducts.filter(index => index._id !== action.payload)
        }
        
    }
})


export const {setSellerProducts, removeSellerProducts} = SellerProductsReducer.actions;
export default SellerProductsReducer.reducer;