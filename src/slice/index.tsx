export {
  useGetShiftQuery,
  useAddShiftMutation,
  useUpdateShiftMutation,
  useDeleteShiftMutation,
  useGetDeptQuery,
  useAddDeptMutation,
  useUpdateDeptMutation,
  useDeleteDeptMutation,
  useGetCompanyQuery,
  useAddCompanyMutation,
  useUpdateCompanyMutation,
  useDeleteCompanyMutation,
  useGetBanksQuery,
  useAddBanksMutation,
  useUpdateBanksMutation,
  useDeleteBanksMutation,
  useGetJobsQuery,
  useGetCityJobsQuery,
  useAddJobsMutation,
  useUpdateJobsMutation,
  useDeleteJobsMutation,
  useGetSkillsQuery,
  useAddSkillsMutation,
  useUpdateSkillsMutation,
  useDeleteSkillsMutation,
} from './admin';

export {
  useGetCityQuery,
  useAddCityMutation,
  useUpdateCityMutation,
  useDeleteCityMutation,
} from './city';

export {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useUploadProfileMutation,
} from './profile';

export {
  useGetStateQuery,
  useAddStatesMutation,
  useUpdateStatesMutation,
  useDeleteStatesMutation,
} from './state';

export {
  useGetOnBoardingProfileQuery,
  useUpdateOnBoardingProfileMutation,
  useGetOnBoardingBankInfoQuery,
  useUpdateOnBoardingBankInfoMutation,
} from './onboarding';

export {useGetJobsQuery as useGetJobsSuggested} from './suggested'
export {
  useGetMyJobsQuery,
  usePostBookmarkingJobsMutation,
} from './myjobs';
export {useGetJobDetailsQuery,usePostInterestedJobsMutation,useGetAdminJobDetailsQuery} from './jobdetails';
export {selectCurrentUserId} from './auth';
