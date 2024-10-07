/* eslint-disable @typescript-eslint/no-explicit-any */
import { createEntityAdapter } from '@reduxjs/toolkit';
import {apiSlice} from '@/config/apiSlice';

type myJobsTypes = { _id: string; jobId: string }

const myJobsAdapter=createEntityAdapter<myJobsTypes>({
    selectId:(myjob)=>myjob._id,
    sortComparer:(a,b)=>a.jobId.localeCompare(b.jobId)
})
const initialState = myJobsAdapter.getInitialState()
export const myJobsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getMyJobs: builder.query({  
        query: ({userId}:{userId:string}) => `/jobs/myjobs/${userId}`,
        transformResponse: responseData => {
            return myJobsAdapter.setAll(initialState, responseData)
        },
        providesTags: (result:any, error, arg):any => 
        result ?
        [
            { type: 'MyJobs', id: 'LIST' },
            ...result.ids.map((id:string | number) => ({ type: 'MyJobs', id }))
        ]: ['MyJobs']
    }),
    postInterestedJobs: builder.mutation({
      query: credentials => ({
        url: '/jobs/myjobs',
        method: 'POST',
        body: {...credentials},
      }),
      invalidatesTags: ['MyJobs'] as string[] & undefined,
    }),
  }),
  overrideExisting: false,
});

export const {useGetMyJobsQuery,usePostInterestedJobsMutation} = myJobsApiSlice;
