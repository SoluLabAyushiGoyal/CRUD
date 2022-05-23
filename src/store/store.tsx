
import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './reducers/crud'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//import persistReducer from 'redux-persist/es/persistReducer'

// ...

const persistConfig ={
  key : 'persist-root',
  storage
}

const persistedReducer = persistReducer(persistConfig, cartSlice)

//manually...
const store = configureStore({
  reducer: {
    crud: persistedReducer,
    
  },
})
export const persistor = persistStore(store)

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch