import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {healtHostApi} from './api';
import pcitiesslice from '@/slice/pcities';
import signupslice from '@/slice/signup';
import loginslice from '@/slice/login';
import thunkMiddleware from 'redux-thunk';
import suggestedjobs from '@/slice/suggested';
import {apiSlice} from './apiSlice';
import authReducer from '@/slice/auth';
export const store = configureStore({
  reducer: {
    // [healtHostApi.reducerPath]: healtHostApi.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    pcities: pcitiesslice,
    suggetedjob: suggestedjobs,
    signup: signupslice,
    login: loginslice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
