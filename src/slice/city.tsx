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
            // let min = 1;
            // const loadedPosts = responseData.map(post => {
            //     if (!post?.date) post.date = sub(new Date(), { minutes: min++ }).toISOString();
            //     if (!post?.reactions) {post.reactions = {
            //         thumbsUp: 0,
            //         wow: 0,
            //         heart: 0,
            //         rocket: 0,
            //         coffee: 0
            //     }}
            //     return post;
            // });
            return cityAdapter.setAll(initialState, responseData)
        },
        providesTags: (result:any, error, arg):any => [
            { type: 'City', id: 'LIST' },
            ...result.ids.map((id:string| number) => ({ type: 'City', id }))
        ]
    }),
  }),
  overrideExisting: false,
});

export const {useGetCityQuery} = cityApiSlice;
