import { apiSlice } from '@/config/apiSlice';

export const authApiSlice=apiSlice.injectEndpoints({
    endpoints:builder=>({
        login:builder.mutation({
            query:credentials=>({
                url:'/auth',
                method:'POST',
                body:{...credentials}
            })
        })
    }),
    overrideExisting:false,
})

export const {useLoginMutation}=authApiSlice
