import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {healtHostApi} from './api';
import pcitiesslice from '@/slice/pcities';
import signupslice from '@/slice/signup';
import loginslice from '@/slice/login';
import thunkMiddleware from 'redux-thunk';
import suggestedjobs from '@/slice/suggested';
export const store = configureStore({
  reducer: {
    [healtHostApi.reducerPath]: healtHostApi.reducer,
    pcities: pcitiesslice,
    suggetedjob: suggestedjobs,
    signup: signupslice,
    login: loginslice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(healtHostApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
