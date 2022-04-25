import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './ui'
import userReducer from './user'
import booksReducer from './books'
import cartReducer from './cart'

export const store = configureStore({
  reducer: {
    uiReducer,
    userReducer,
    booksReducer,
    cartReducer
  }
})
