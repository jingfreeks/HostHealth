import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'
import type { PreloadedState } from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query';
import {healtHostApi} from './api';
// import pcitiesslice from '@/slice/pcities';
import loginslice from '@/slice/login';
// import suggestedjobs from '@/slice/suggested';
import {apiSlice} from './apiSlice';
import authReducer from '@/slice/auth';

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
}



const rootReducer = combineReducers({
  // [healtHostApi.reducerPath]: healtHostApi.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  // pcities: pcitiesslice,
  // suggetedjob: suggestedjobs,
  login: loginslice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupstore = (preloadedState?:PreloadedState<RootState>)=>configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false}).concat(apiSlice.middleware),
  devTools: true,
  preloadedState
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupstore>;
export type AppDispatch = AppStore['dispatch'];

export const store =setupstore({});
export const persiststore = persistStore(store)

setupListeners(store.dispatch);
