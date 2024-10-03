import {setCredentials, setLogout} from '@/slice/auth';
import Config from 'react-native-config';
import {TagTypes} from './constant';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: Config.DEV_BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers, {getState}: any) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithAuth = async (args: any, api: any, extraOptions: string) => {
  let result: any =
    args?.url === '/logout'
      ? await baseQuery(
          {
            url: '/auth/logout',
            method: 'POST',
            headers: {
              Cookie: `jwt=${api.getState().auth.refreshToken}`,
            },
          },
          api,
          extraOptions,
        )
      : await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 403) {
    const refereshResult = await baseQuery(
      {
        url: '/auth/refresh',
        headers: {
          Cookie: `jwt=${api.getState().auth.refreshToken}`,
        },
      },
      api,
      extraOptions,
    );
    if (refereshResult?.data) {
      const user = api.getState().auth.user;
      const roles = api.getState().auth.roles;
      const userId = api.getState().auth.userId;
      const refreshToken = api.getState().auth.refreshToken;
      const isOnBoarding = api.getState().auth.onBoarding
      api.dispatch(
        setCredentials({...refereshResult.data, user, roles, refreshToken,userId,isOnBoarding}),
      );

      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export const apiSlice = createApi<any, any>({
  baseQuery: baseQueryWithAuth,
  reducerPath: 'api',
  endpoints: builder => ({}),
  tagTypes: TagTypes as string[] & undefined,
});
