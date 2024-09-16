/* eslint-disable @typescript-eslint/no-explicit-any */
import { createEntityAdapter } from '@reduxjs/toolkit';
import {apiSlice} from '@/config/apiSlice';

type cityTypes = { _id: string; name: string }

export const cityAdapter=createEntityAdapter<cityTypes>({
    selectId:(city)=>city._id,
    sortComparer:(a,b)=>a.name.localeCompare(b.name)
})
export const initialState = cityAdapter.getInitialState()
export const cityApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCity: builder.query({  
        query: () => '/city',
        transformResponse: responseData => {
            return cityAdapter.setAll(initialState, responseData)
        },
        providesTags: (result:any, error, arg):any => 
        result ?
        [
            { type: 'City', id: 'LIST' },
            ...result.ids.map((id:string | number) => ({ type: 'City', id }))
        ]: ['City']
    }),
    addCity: builder.mutation({
      query: credentials => ({
        url: '/city',
        method: 'POST',
        body: {...credentials},
      }),
      invalidatesTags: ['City'] as any,
    }),
    updateCity: builder.mutation({
      query: credentials => ({
        url: '/city',
        method: 'PATCH',
        body: {...credentials},
      }),
      invalidatesTags: ['City'] as string[]&never& undefined,
    }),
    deleteCity: builder.mutation({
      query: credentials => ({
        url: '/city',
        method: 'DELETE',
        body: {...credentials},
      }),
      invalidatesTags: ['City'] as any,
    }),
  }),
  overrideExisting: true,
});

export const {useGetCityQuery,useAddCityMutation,useUpdateCityMutation,useDeleteCityMutation} = cityApiSlice;
