// redux saga or redux thunk
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import { counterReducer } from './reducers/couterReducers';

const store = configureStore({
    reducer: {
        count: counterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
