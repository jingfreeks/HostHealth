import {createEntityAdapter} from '@reduxjs/toolkit';
import {apiSlice} from '@/config/apiSlice';

type cityTypes = {_id: string; name: string};

export const cityAdapter = createEntityAdapter<cityTypes>({
  selectId: city => city._id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});
export const initialState = cityAdapter.getInitialState();
export const departmentApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getDept: builder.query({
      query: () => '/dept',
      transformResponse: responseData => {
        return cityAdapter.setAll(initialState, responseData);
      },
      providesTags: (result: any, error, arg): any =>
        result
          ? [
              {type: 'Department', id: 'LIST'},
              ...result.ids.map((id: string | number) => ({
                type: 'Department',
                id,
              })),
            ]
          : ['Department'],
    }),
    addDept: builder.mutation({
      query: credentials => ({
        url: '/dept',
        method: 'POST',
        body: {...credentials},
      }),
      invalidatesTags: ['Department'] as any,
    }),
    updateDept: builder.mutation({
      query: credentials => ({
        url: '/dept',
        method: 'PATCH',
        body: {...credentials},
      }),
      invalidatesTags: ['Department'] as string[] & never & undefined,
    }),
    deleteDept: builder.mutation({
      query: credentials => ({
        url: '/dept',
        method: 'DELETE',
        body: {...credentials},
      }),
      invalidatesTags: ['Department'] as any,
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetDeptQuery,
  useAddDeptMutation,
  useUpdateDeptMutation,
  useDeleteDeptMutation,
} = departmentApiSlice;
