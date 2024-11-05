import React, {useMemo, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {Alert} from 'react-native';
import type {RootNavigationProps} from '@/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {
  useGetCompanyQuery,
  useDeleteCompanyMutation,
  selectCurrentUserId,
  useGetJobsQuery,
  useGetDeptQuery,
  useGetShiftQuery,
  useUploadProfileMutation,
  useDeleteJobsMutation
} from '@/slice';

export const useJobsHooks = () => {
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
  const usrId = useSelector(selectCurrentUserId)?.toString();
  const [uri, setUri] = useState<string>('');
  const [uploadProfile, {isLoading:uploadLoading}] = useUploadProfileMutation();
  const {
    data: company,
    isLoading: companyLoading,
    isSuccess: companySuccess,
    isError: companyIsError,
    error: companyError,
  } = useGetCompanyQuery<{
    refetch: () => void;
    data: any;
    isLoading: boolean;
    isSuccess: string;
    isError: boolean;
    error: any;
  }>('getCompany');

  const {
    data: jobs,
    isFetching:fetchingJobs,
    isLoading: jobLoading,
    isSuccess: jobsSuccess,
    isError: jobIsError,
    error: jobsError,
  } = useGetJobsQuery<any>('getJobs'
    // useMemo(() => {
    //   return {usrId};
    // }, [usrId]),
  );
 
  const {
    data: dept,
    isLoading: depIsLoading,
    isSuccess: deptIsSuccess,
    isError: deptIsError,
    error: deptError,
  } = useGetDeptQuery<{
    refetch: () => void;
    data: any;
    isLoading: boolean;
    isSuccess: string;
    isError: boolean;
    error: any;
  }>('getDept');

  const {
    data: shift,
    isLoading: shiftIsLoading,
    isSuccess: shiftIsSuccess,
    isError: shiftIsError,
    error: shiftError,
  } = useGetShiftQuery<{
    refetch: () => void;
    data: any;
    isLoading: boolean;
    isSuccess: string;
    isError: boolean;
    error: any;
  }>('getShift');

  const [deletJobs, {isLoading: deleteLoading}] =
  useDeleteJobsMutation();

  const handleDeleteJobs = async (id: string) => {
    try {
      await deletJobs({
        id,
      }).unwrap();
    } catch (error) {
      Alert.alert(error?.data?.message);
    }
  };

  const getDropdownList = (data: any) => {
    let ldata = data;
    return data?.ids?.map((item: string) => {
      return {
        label: ldata?.entities[item]?.name || ldata?.entities[item]?.title,
        value: ldata?.entities[item]?._id,
      };
    });
  };
  const companyData = useMemo(() => getDropdownList(company), [company]);
  const deptData = useMemo(() => getDropdownList(dept), [dept]);
  const shiftData = useMemo(() => getDropdownList(shift), [shift]);

  const options: {
    saveToPhotos: boolean;
    mediaType: 'photo' | 'video';
    includeBase64: boolean;
  } = {
    saveToPhotos: true,
    mediaType: 'photo',
    includeBase64: false,
    // includeExtra,
  };

  return {
    navigation,
    company,
    companyLoading,
    companySuccess,
    companyIsError,
    companyError,
    handleDeleteJobs,
    deleteLoading,
    jobs,
    jobLoading,
    fetchingJobs,
    jobsSuccess,
    jobIsError,
    jobsError,
    dept,
    depIsLoading,
    deptIsSuccess,
    deptIsError,
    deptError,
    shift,
    shiftIsLoading,
    shiftIsSuccess,
    shiftIsError,
    shiftError,
    companyData,
    deptData,
    shiftData,
    uri,
    setUri,
    options,
    uploadProfile,
    uploadLoading,usrId
  };
};
