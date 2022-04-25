import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cartReducer',
  initialState: {
    items: []
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload)
    },
    removeProduct: (state, action) => {
      state.items.filter(item => item.id !== action.payload)
    }
  }
})

export const { addProduct, removeProduct } = cartSlice.actions
export default cartSlice.reducer
