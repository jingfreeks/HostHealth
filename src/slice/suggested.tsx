/* eslint-disable @typescript-eslint/no-explicit-any */
import { createEntityAdapter } from '@reduxjs/toolkit';
import {apiSlice} from '@/config/apiSlice';

type jobsTypes = { _id: string; jobtitle: string }

const jobsAdapter=createEntityAdapter<jobsTypes>({
    selectId:(job)=>job._id,
    sortComparer:(a,b)=>a.jobtitle.localeCompare(b.jobtitle)
})
const initialState = jobsAdapter.getInitialState()
export const jobsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getJobs: builder.query({  
        query: () => '/jobs',
        transformResponse: responseData => {
            return jobsAdapter.setAll(initialState, responseData)
        },
        providesTags: (result:any, error, arg):any => 
        result ?
        [
            { type: 'Jobs', id: 'LIST' },
            ...result.ids.map((id:string | number) => ({ type: 'Jobs', id }))
        ]: ['Jobs']
    }),
  }),
  overrideExisting: true,
});

export const {useGetJobsQuery} = jobsApiSlice;
