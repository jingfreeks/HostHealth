import {createEntityAdapter} from '@reduxjs/toolkit';
import {apiSlice} from '@/config/apiSlice';

type cityTypes = {_id: string; name: string};

export const stateAdapter = createEntityAdapter<cityTypes>({
  selectId: city => city._id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});
export const initialState = stateAdapter.getInitialState();

export const stateApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getState: builder.query({
      query: () => '/states',
      transformResponse: responseData => {
        return stateAdapter.setAll(initialState, responseData);
      },
      providesTags: (result: any, error, arg): any =>
        result
          ? [
              {type: 'States', id: 'LIST'},
              ...result.ids.map((id: string | number) => ({type: 'States', id})),
            ]
          : ['States'],
    }),
    addStates: builder.mutation({
      query: credentials => ({
        url: '/states',
        method: 'POST',
        body: {...credentials},
      }),
      invalidatesTags: ['States'] as any,
    }),
    updateStates: builder.mutation({
      query: credentials => ({
        url: '/states',
        method: 'PATCH',
        body: {...credentials},
      }),
      invalidatesTags: ['States'] as any,
    }),
    deleteStates: builder.mutation({
      query: credentials => ({
        url: '/states',
        method: 'DELETE',
        body: {...credentials},
      }),
      invalidatesTags: ['States'] as any,
    }),
  }),
  overrideExisting: true,
});

export const {useGetStateQuery,useAddStatesMutation,useUpdateStatesMutation,useDeleteStatesMutation} = stateApiSlice;
