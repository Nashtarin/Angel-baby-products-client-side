import { configureStore } from '@reduxjs/toolkit'

import postsReducer from './slices/postslice'

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
})
