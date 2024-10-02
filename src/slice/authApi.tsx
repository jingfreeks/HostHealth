import {apiSlice} from '@/config/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/auth',
        method: 'POST',
        body: {...credentials},
        credentials: "include",
      }),
    }),
    logout: builder.mutation({
      query: credentials => ({
        url: '/logout',
        method: 'POST',
        body: {...credentials},
        credentials: "include",
      }),
    }),
    signup: builder.mutation({
      query: credentials => ({
        url: '/signup',
        method: 'POST',
        body: {...credentials},
      }),
    }),
  }),
  overrideExisting: true,
});

export const {useLoginMutation,useSignupMutation,useLogoutMutation} = authApiSlice || {};
