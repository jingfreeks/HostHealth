/* eslint-disable @typescript-eslint/no-explicit-any */
import {apiSlice} from '@/config/apiSlice';
import type {ProfileTypes} from './types';



export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProfile: builder.query({
      query: ({userId}: {userId: string}) => `/profile/${userId}`,
      providesTags:():any=>['Profile'],
      transformResponse: responseData => {
        return responseData;
      },
    }),
    updateProfile: builder.mutation({
      query: ({userId, ...patch}) => ({
        url: `/profile/${userId}`,
        method: 'PATCH',
        body: patch,
      }),
      transformResponse: (responseData:ProfileTypes) => {
        return responseData;
      },
      invalidatesTags: (_):any => ["Profile"]
    }),
  }),
  overrideExisting: true,
});

export const {useGetProfileQuery,useUpdateProfileMutation} = profileApiSlice || {};
