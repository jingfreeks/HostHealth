/* eslint-disable @typescript-eslint/no-explicit-any */
import { createEntityAdapter } from '@reduxjs/toolkit';
import {apiSlice} from '@/config/apiSlice';

export const jobDetailsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getJobDetails: builder.query({  
        query: ({jobId}:{jobId:string}) => `/jobs/details/${jobId}`,
        transformResponse: responseData => {
            const {_doc,cityname,compaddress,compname,deptname,shiftname,statename,status}=responseData
            return {..._doc,cityname,compaddress,compname,deptname,shiftname,statename,status}
        },
    }),
    postInterestedJobs: builder.mutation({
      query: credentials => ({
        url: `/jobs/details/${credentials?.jobId}`,
        method: 'POST',
        body: {...credentials},
      }),
      invalidatesTags: ['MyJobs'] as string[] & undefined,
    })
  }),
  
  overrideExisting: true,
});

export const {useGetJobDetailsQuery,usePostInterestedJobsMutation} = jobDetailsApiSlice;
