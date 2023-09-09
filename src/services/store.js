import {configureStore} from '@reduxjs/toolkit';
import { articleApi } from './article';
import { chatgptApi } from './chatgpt';

export const store= configureStore({
    reducer:{
        [articleApi.reducerPath]:articleApi.reducer,
        [chatgptApi.reducerPath]:chatgptApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(
        articleApi.middleware,
        chatgptApi.middleware
        )
})