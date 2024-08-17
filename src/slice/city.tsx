/* eslint-disable @typescript-eslint/no-explicit-any */
import { createEntityAdapter } from '@reduxjs/toolkit';
import {apiSlice} from '@/config/apiSlice';

type cityTypes = { _id: string; name: string }

const cityAdapter=createEntityAdapter<cityTypes>({
    selectId:(city)=>city._id,
    sortComparer:(a,b)=>a.name.localeCompare(b.name)
})
const initialState = cityAdapter.getInitialState()
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
  }),
  overrideExisting: true,
});

export const {useGetCityQuery} = cityApiSlice;
