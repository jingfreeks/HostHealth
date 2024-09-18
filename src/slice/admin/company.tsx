import {createEntityAdapter} from '@reduxjs/toolkit';
import {apiSlice} from '@/config/apiSlice';

type companyTypes = {_id: string; name: string};

export const companyAdapter = createEntityAdapter<companyTypes>({
  selectId: city => city._id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});
export const initialState = companyAdapter.getInitialState();
export const companyApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCompany: builder.query({
      query: () => '/company',
      transformResponse: responseData => {
        return companyAdapter.setAll(initialState, responseData);
      },
      providesTags: (result: any, error, arg): any =>
        result
          ? [
              {type: 'Company', id: 'LIST'},
              ...result.ids.map((id: string | number) => ({
                type: 'Company',
                id,
              })),
            ]
          : ['Company'],
    }),
    addCompany: builder.mutation({
      query: credentials => ({
        url: '/company',
        method: 'POST',
        body: {...credentials},
      }),
      invalidatesTags: ['Company'] as string[] & undefined,
    }),
    updateCompany: builder.mutation({
      query: credentials => ({
        url: '/company',
        method: 'PATCH',
        body: {...credentials},
      }),
      invalidatesTags: ['Company'] as string[] & never & undefined,
    }),
    deleteCompany: builder.mutation({
      query: credentials => ({
        url: '/company',
        method: 'DELETE',
        body: {...credentials},
      }),
      invalidatesTags: ['Company'] as string[] & undefined,
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetCompanyQuery,
  useAddCompanyMutation,
  useUpdateCompanyMutation,
  useDeleteCompanyMutation,
} = companyApiSlice;
