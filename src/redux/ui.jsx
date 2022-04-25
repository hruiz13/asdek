import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
  name: 'uiReducer',
  initialState: {
    loading: false,
    error: false
  },
  reducers: {
    isLoading: (state, action) => {
      state.loading = action.payload
    },
    isError: (state, action) => {
      state.error = action.payload
    }
  }
})

export const { isLoading, isError } = uiSlice.actions
export default uiSlice.reducer
