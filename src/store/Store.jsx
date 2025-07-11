import { configureStore } from '@reduxjs/toolkit'
import ProductsReducer from '../reducers/ProductsReducer'
import  UsersReducer  from '../reducers/UsersReducer'
import  SellUsersReducer  from '../reducers/SellerUsersReducer'
import  SellerProductsReducer  from '../reducers/SellerProductsReducer'

export const Store = configureStore({
  reducer: {
    users: UsersReducer,
    products: ProductsReducer,
    sellUsers:SellUsersReducer,  
    sellerProducts:SellerProductsReducer,
  },
})  