/* eslint-disable @typescript-eslint/no-explicit-any */
import { setCredentials,logout } from '@/slice/auth';
import Config from 'react-native-config';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: Config.DEV_BASE_URL,
  credentials: 'include',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prepareHeaders: (headers, {getState}: any) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithAuth = async (
  args: string,
  api: any,
  extraOptions: string,
) => {
  let result: any = await baseQuery(args, api, extraOptions);
  console.log('refereshResult',result)
  if (result?.error?.originalStatus === 403) {
    console.log('Sending refresh token');

    const refereshResult = await baseQuery('/refresh', api, extraOptions);

    if(refereshResult?.data){
        const user = api.getState().auth.user;
        //store the new token
        api.dispatch(setCredentials({...refereshResult.data,user}))
        //retry the original query with new access token
        result= await baseQuery(args,api,extraOptions)
    }else{
        api.dispatch(logout())
    }
  }
  return result;
};

export const apiSlice=createApi<any,any>({
    baseQuery:baseQueryWithAuth,
    reducerPath: 'api',
    endpoints:builder=>({}),
    tagTypes: ['City','Jobs','MyJobs','JobDetails'] as any,
})
