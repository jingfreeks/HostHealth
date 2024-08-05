/* eslint-disable @typescript-eslint/no-explicit-any */
import {apiSlice} from '@/config/apiSlice';

export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProfile: builder.query({  
        query: ({userId}:{userId:string}) => `/profile/${userId}`,
        transformResponse: responseData => {
          console.log('responseData',responseData)
            return responseData
        },
    }),
  }),
  overrideExisting: true,
});

export const {useGetProfileQuery} = profileApiSlice;
