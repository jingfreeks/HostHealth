/* eslint-disable @typescript-eslint/no-explicit-any */
import {createEntityAdapter} from '@reduxjs/toolkit';
import {apiSlice} from '@/config/apiSlice';

type jobsTypes = {_id: string; jobtitle: string};

const jobsAdapter = createEntityAdapter<jobsTypes>({
  selectId: job => job._id,
  sortComparer: (a, b) => a.jobtitle.localeCompare(b.jobtitle),
});
const initialState = jobsAdapter.getInitialState();

export const jobsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getJobs: builder.query({
      query: ({usrId}) => `/jobs`,
      transformResponse: responseData => {
        return jobsAdapter.setAll(initialState, responseData);
      },
      providesTags: (result: any, error, arg): any =>{
        console.log('resultss',result)
        return result
        ? [
            {type: 'Jobs', id: 'LIST'},
            ...result.ids.map((id: string | number) => ({type: 'Jobs', id})),
          ]
        : ['Jobs']
      }
   
    }),
    addJobs: builder.mutation({
      query: credentials => ({
        url: '/jobs',
        method: 'POST',
        body: {...credentials},
      }),
      async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
        try {
          const { data: createdPost } = await queryFulfilled
          const patchResult = dispatch(
            jobsApiSlice.util.upsertQueryData('getJobs', id, createdPost)
          )
          console.log('patchResult',patchResult)
        } catch {}
      },
      invalidatesTags: ['Jobs'] as string[] & undefined,
    }),
    updateJobs: builder.mutation({
      query: credentials => ({
        url: '/jobs',
        method: 'PATCH',
        body: {...credentials},
      }),
      invalidatesTags: ['Jobs'] as string[] & undefined,
    }),
    deleteJobs: builder.mutation({
      query: credentials => ({
        url: '/jobs',
        method: 'DELETE',
        body: {...credentials},
      }),
      invalidatesTags: ['Jobs'] as string[] & undefined,
    }),
    getCityJobs: builder.query({
      query: ({cityId}: {cityId: string}) => `/city/${cityId}`,
      transformResponse: responseData => {
        return jobsAdapter.setAll(initialState, responseData);
      },
      providesTags: (result: any, error, arg): any =>
        result
          ? [
              {type: 'CityJobs', id: 'LIST'},
              ...result.ids.map((id: string | number) => ({
                type: 'CityJobs',
                id,
              })),
            ]
          : ['CityJobs'],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetJobsQuery,
  useGetCityJobsQuery,
  useAddJobsMutation,
  useUpdateJobsMutation,
  useDeleteJobsMutation,
} = jobsApiSlice;
