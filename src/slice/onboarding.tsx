/* eslint-disable @typescript-eslint/no-explicit-any */
import {Platform} from 'react-native';
import {apiSlice} from '@/config/apiSlice';
import type {ProfileTypes} from './types';

export const onBoardingApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getOnBoardingProfile: builder.query({
      query: ({userId}: {userId: string}) => `/onboarding/profile/${userId}`,
      providesTags: (): any => ['Profile'],
      transformResponse: responseData => {
        return responseData;
      },
    }),
    updateOnBoardingProfile: builder.mutation({
      query: ({userId, ...patch}: {userId: string}) => ({
        url: `/profile/${userId}`,
        method: 'PATCH',
        body: patch,
      }),
      transformResponse: (responseData: ProfileTypes) => {
        return responseData;
      },
      invalidatesTags: (_): any => ['Profile'],
    }),
    getOnBoardingBankInfo: builder.query({
      query: ({userId}: {userId: string}) => `/onboarding/bankInfo/${userId}`,
      providesTags: (): any => ['BankInfo'],
      transformResponse: responseData => {
        return responseData;
      },
    }),
    updateOnBoardingBankInfo: builder.mutation({
      query: ({userId, ...patch}: {userId: string}) => ({
        url: `/onboarding/bankInfo/${userId}`,
        method: 'PATCH',
        body: patch,
      }),
      transformResponse: (responseData: ProfileTypes) => {
        return responseData;
      },
      invalidatesTags: (_): any => ['BankInfo'],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetOnBoardingProfileQuery,
  useUpdateOnBoardingProfileMutation,
  useGetOnBoardingBankInfoQuery,
  useUpdateOnBoardingBankInfoMutation,
} = onBoardingApiSlice || {};
