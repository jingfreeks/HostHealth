
import { createEntityAdapter } from '@reduxjs/toolkit';
import {apiSlice} from '@/config/apiSlice';

type cityTypes = { _id: string; name: string }

export const stateAdapter=createEntityAdapter<cityTypes>({
    selectId:(city)=>city._id,
    sortComparer:(a,b)=>a.name.localeCompare(b.name)
})
export const initialState = stateAdapter.getInitialState()

export const stateApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getState: builder.query({  
        query: () => '/states',
        transformResponse: responseData => {
            return stateAdapter.setAll(initialState, responseData)
        },
        providesTags: (result:any, error, arg):any => 
        result ?
        [
            { type: 'State', id: 'LIST' },
            ...result.ids.map((id:string | number) => ({ type: 'State', id }))
        ]: ['State']
    }),
  }),
  overrideExisting: true,
});

export const {useGetStateQuery} = stateApiSlice;
