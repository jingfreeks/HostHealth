import {createEntityAdapter} from '@reduxjs/toolkit';
import {apiSlice} from '@/config/apiSlice';

type departmentTypes = {_id: string; name: string};

export const departmentAdapter = createEntityAdapter<departmentTypes>({
  selectId: city => city._id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});
export const initialState = departmentAdapter.getInitialState();
export const departmentApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getDept: builder.query({
      query: () => '/dept',
      transformResponse: responseData => {
        return departmentAdapter.setAll(initialState, responseData);
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
      invalidatesTags: ['Department'] as string[] & undefined,
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
      invalidatesTags: ['Department'] as string[] & undefined,
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
