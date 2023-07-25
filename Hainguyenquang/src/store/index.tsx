// redux saga or redux thunk
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import { counterReducer, productReducer, choose_itemReducer } from './reducers/couterReducers';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

const store = configureStore({
    reducer: combineReducers({
        counterReducer,
        productReducer,
        choose_itemReducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, thunk),
    devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
