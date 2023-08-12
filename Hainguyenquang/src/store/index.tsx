// redux saga or redux thunk
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import { addToCartReducer, productListReducer } from './reducers/couterReducers';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

const store = configureStore({
    reducer: combineReducers({
        productListReducer,
        addToCartReducer

    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, thunk),
    devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
