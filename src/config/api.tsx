import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const healtHostApi = createApi({
  reducerPath: 'healtHostApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://run.mocky.io/v3/'}),
  endpoints: builder => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getPopularCities: builder.query<any, any>({
      query: () => '5e58bb33-dcf4-4d68-8a64-c68775955769',
    }),
    getSuggestedJobs: builder.query({
      query: () => 'd96eff10-e889-47d3-b8ad-3b2a106b71cd',
    }),
  }),
});

export const {useGetPopularCitiesQuery, useGetSuggestedJobsQuery} =
  healtHostApi;
