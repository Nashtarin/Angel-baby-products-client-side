import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { pid: '1', ptitle: 'First Post!', pcontent: 'Hello!' },
  { pid: '2', ptitle: 'Second Post', pcontent: 'More text' },
]

const postsSlice = createSlice({
  name: 'toasts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    },
  },
})

export const {postadded} = postsSlice.actions

export default postsSlice.reducer
 
