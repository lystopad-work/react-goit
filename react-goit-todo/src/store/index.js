import {configureStore} from "@reduxjs/toolkit";
import todosReducer from './todos';
import {todosApi} from "./todosQuery";
import authReducer from './auth';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        auth: authReducer,
        authReducer: persistedReducer,
        [todosApi.reducerPath]: todosApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(todosApi.middleware),
})

export const persistore = persistStore(store);