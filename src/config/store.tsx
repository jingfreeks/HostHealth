import {configureStore, combineReducers} from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query';
import {healtHostApi} from './api';
// import pcitiesslice from '@/slice/pcities';
import loginslice from '@/slice/login';
import suggestedjobs from '@/slice/suggested';
import {apiSlice} from './apiSlice';
import authReducer from '@/slice/auth';

const rootReducer = combineReducers({
  // [healtHostApi.reducerPath]: healtHostApi.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  // pcities: pcitiesslice,
  suggetedjob: suggestedjobs,
  login: loginslice,
});


export const setupstore = (preloadedState?:PreloadedState<RootState>)=>configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
  preloadedState
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupstore>;
export type AppDispatch = AppStore['dispatch'];

export const store =setupstore({});
setupListeners(store.dispatch);
