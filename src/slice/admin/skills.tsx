import {createEntityAdapter} from '@reduxjs/toolkit';
import {apiSlice} from '@/config/apiSlice';

type skillsTypes = {_id: string; name: string};

export const skillAdapter = createEntityAdapter<skillsTypes>({
  selectId: skills => skills._id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});
export const initialState = skillAdapter.getInitialState();

export const skillsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getSkills: builder.query({
      query: () => '/admin/skill',
      transformResponse: responseData => {
        return skillAdapter.setAll(initialState, responseData);
      },
      providesTags: (result: any, error, arg): any =>
        result
          ? [
              {type: 'Skill', id: 'LIST'},
              ...result.ids.map((id: string | number) => ({
                type: 'Skill',
                id,
              })),
            ]
          : ['Skill'],
    }),
    addSkills: builder.mutation({
      query: credentials => ({
        url: '/admin/skill',
        method: 'POST',
        body: {...credentials},
      }),
      invalidatesTags: ['Skill'] as string[] & undefined,
    }),
    updateSkills: builder.mutation({
      query: credentials => ({
        url: '/admin/skill',
        method: 'PATCH',
        body: {...credentials},
      }),
      invalidatesTags: ['Skill'] as string[] & never & undefined,
    }),
    deleteSkills: builder.mutation({
      query: credentials => ({
        url: '/admin/skill',
        method: 'DELETE',
        body: {...credentials},
      }),
      invalidatesTags: ['Skill'] as string[] & undefined,
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetSkillsQuery,
  useAddSkillsMutation,
  useUpdateSkillsMutation,
  useDeleteSkillsMutation,
} = skillsApiSlice;
