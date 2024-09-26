/* eslint-disable @typescript-eslint/no-explicit-any */
import {Platform} from 'react-native'
import {apiSlice} from '@/config/apiSlice';
import type {ProfileTypes} from './types';

export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProfile: builder.query({
      query: ({userId}: {userId: string}) => `/profile/${userId}`,
      providesTags: (): any => ['Profile'],
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
      transformResponse: (responseData: ProfileTypes) => {
        return responseData;
      },
      invalidatesTags: (_): any => ['Profile'],
    }),
    uploadProfile: builder.mutation({
      query: credentials => {
        const formData:any = new FormData()
        formData.append('avatar', {
          name: credentials.assets[0].fileName,
          type: credentials.assets[0].type,
          uri:
            Platform.OS === 'android' ? credentials?.assets[0]?.uri : credentials?.assets[0]?.uri?.replace('file://', ''),
        });
        return {
          url: '/upload',
          method: 'POST',
          body: formData,
        };
      },
      transformResponse: (responseData: any) => {
        return responseData;
      },
      invalidatesTags: (_): any => ['Profile'],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useUploadProfileMutation,
} = profileApiSlice || {};
