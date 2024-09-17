import {createEntityAdapter} from '@reduxjs/toolkit';
import {apiSlice} from '@/config/apiSlice';

type shiftTypes = {_id: string; title: string};

export const shiftAdapter = createEntityAdapter<shiftTypes>({
  selectId: shift => shift._id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});
export const initialState = shiftAdapter.getInitialState();

export const shiftApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getShift: builder.query({
      query: () => '/shift',
      transformResponse: responseData => {
        return shiftAdapter.setAll(initialState, responseData);
      },
      providesTags: (result: any, error, arg): any =>
        result
          ? [
              {type: 'Shift', id: 'LIST'},
              ...result.ids.map((id: string | number) => ({
                type: 'Shift',
                id,
              })),
            ]
          : ['Shift'],
    }),
    addShift: builder.mutation({
      query: credentials => ({
        url: '/shift',
        method: 'POST',
        body: {...credentials},
      }),
      invalidatesTags: ['Shift'] as string[] & undefined,
    }),
    updateShift: builder.mutation({
      query: credentials => ({
        url: '/shift',
        method: 'PATCH',
        body: {...credentials},
      }),
      invalidatesTags: ['Shift'] as string[] & never & undefined,
    }),
    deleteShift: builder.mutation({
      query: credentials => ({
        url: '/shift',
        method: 'DELETE',
        body: {...credentials},
      }),
      invalidatesTags: ['Shift'] as string[] & undefined,
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetShiftQuery,
  useAddShiftMutation,
  useUpdateShiftMutation,
  useDeleteShiftMutation,
} = shiftApiSlice;
