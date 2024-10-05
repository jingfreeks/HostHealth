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

export {useGetJobsQuery,useGetCityJobsQuery} from './suggested'