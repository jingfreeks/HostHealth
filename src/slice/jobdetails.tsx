/* eslint-disable @typescript-eslint/no-explicit-any */
import { createEntityAdapter } from '@reduxjs/toolkit';
import {apiSlice} from '@/config/apiSlice';

export const jobDetailsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getJobDetails: builder.query({  
        query: ({jobId}:{jobId:string}) => `/jobs/${jobId}`,
        transformResponse: responseData => {
            const {_doc,cityname,compaddress,compname,deptname,shiftname,statename}=responseData
            return {..._doc,cityname,compaddress,compname,deptname,shiftname,statename}
        },
    }),
  }),
  overrideExisting: true,
});

export const {useGetJobDetailsQuery} = jobDetailsApiSlice;
