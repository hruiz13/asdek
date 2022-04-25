import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { isError } from './ui'

export const getNewBooks = createAsyncThunk('get/getNewBooks', async () => {
  /* global fetch */
  const response = await fetch('https://6265ae35dbee37aff9a7f244.mockapi.io/api/asdek/newBooks')
  const res = await response.json()
  return res
})

export const booksSlice = createSlice({
  name: 'booksReducer',
  initialState: {
    news: undefined,
    newsLoading: false
  },
  reducers: {
    getBooks: (state, action) => {
      state.news = action.payload
    }
  },
  extraReducers (builder) {
    builder
      .addCase(getNewBooks.pending, (state) => {
        state.newsLoading = true
      })
      .addCase(getNewBooks.fulfilled, (state, action) => {
        isError(false)
        state.news = action.payload
        state.newsLoading = false
      })
      .addCase(getNewBooks.rejected, (state, action) => {
        isError(true)
        state.newsLoading = false
      })
  }
})

export const { setBooks } = booksSlice.actions
export default booksSlice.reducer
