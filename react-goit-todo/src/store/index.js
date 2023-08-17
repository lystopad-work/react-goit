import {configureStore} from "@reduxjs/toolkit";
import todosReducer from './todos';
import {todosApi} from "./todosQuery";
export const store = configureStore({
    reducer: {
        todos: todosReducer,
        [todosApi.reducerPath]: todosApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todosApi.middleware),
})