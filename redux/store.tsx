import { configureStore } from '@reduxjs/toolkit'
// import productSlice from './slices/productSlice'
import productsApi from './slices/productApiSlice'

export const store = configureStore({
  reducer: {
    // product: productSlice,
    productApi: productsApi, 
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch