import { configureStore } from '@reduxjs/toolkit'
import ProductsReducer from '../reducers/ProductsReducer'


export const Store = configureStore({
  reducer: {
    products: ProductsReducer,
  },
})