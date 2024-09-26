import {createEntityAdapter} from '@reduxjs/toolkit';
import {apiSlice} from '@/config/apiSlice';

type bankTypes = {_id: string; name: string};

export const bankAdapter = createEntityAdapter<bankTypes>({
  selectId: bank => bank._id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});
export const initialState = bankAdapter.getInitialState();

export const bankApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getBanks: builder.query({
      query: () => '/bank',
      transformResponse: responseData => {
        return bankAdapter.setAll(initialState, responseData);
      },
      providesTags: (result: any, error, arg): any =>
        result
          ? [
              {type: 'Banks', id: 'LIST'},
              ...result.ids.map((id: string | number) => ({
                type: 'Banks',
                id,
              })),
            ]
          : ['Banks'],
    }),
    addBanks: builder.mutation({
      query: credentials => ({
        url: '/bank',
        method: 'POST',
        body: {...credentials},
      }),
      invalidatesTags: ['Banks'] as string[] & undefined,
    }),
    updateBanks: builder.mutation({
      query: credentials => ({
        url: '/bank',
        method: 'PATCH',
        body: {...credentials},
      }),
      invalidatesTags: ['Banks'] as string[] & never & undefined,
    }),
    deleteBanks: builder.mutation({
      query: credentials => ({
        url: '/bank',
        method: 'DELETE',
        body: {...credentials},
      }),
      invalidatesTags: ['Banks'] as string[] & undefined,
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetBanksQuery,
  useAddBanksMutation,
  useUpdateBanksMutation,
  useDeleteBanksMutation,
} = bankApiSlice;
