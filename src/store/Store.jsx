import { configureStore } from '@reduxjs/toolkit'
import ProductsReducer from '../reducers/ProductsReducer'
import  UsersReducer  from '../reducers/UsersReducer'

export const Store = configureStore({
  reducer: {
    users: UsersReducer,
    products: ProductsReducer,
  },
})