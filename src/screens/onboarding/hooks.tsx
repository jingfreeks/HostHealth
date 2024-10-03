import React, {useMemo, useEffect,useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';
import {useForm, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  useGetOnBoardingProfileQuery,
  useUpdateOnBoardingProfileMutation,
  useGetOnBoardingBankInfoQuery,
  useUpdateOnBoardingBankInfoMutation,
} from '@/slice';
import {useSelector} from 'react-redux';
import {selectCurrentUserId, setCredentials,selectCurrentAuth,selectCurrentToken} from '@/slice/auth';
import * as yup from 'yup';
import {ProfileSchema, BankInfoSchema} from './schema';
import {useDispatch} from 'react-redux';
import { ThunkDispatch} from '@reduxjs/toolkit';

export const useOnBoardingHooks = () => {
  type FormProfileData = yup.InferType<typeof ProfileSchema>;
  type FormBankInfoData = yup.InferType<typeof BankInfoSchema>;
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const usrId = useSelector(selectCurrentUserId);
  const auth = useSelector(selectCurrentAuth);
  const token=useSelector(selectCurrentToken)
  const [uri, setUri] = useState<string>('');
  const [updateOnBoardingProfile, {isLoading: profileLoading}] = useUpdateOnBoardingProfileMutation(
    {fixedCacheKey: 'Profile'},
  );
  const {data: profiles} = useGetOnBoardingProfileQuery<{
    refetch: () => void;
    data: any;
  }>(
    useMemo(() => {
      return {userId: usrId};
    }, [usrId]),
  );

  const {data: bankInfo} = useGetOnBoardingBankInfoQuery<{
    refetch: () => void;
    data: any;
  }>(
    useMemo(() => {
      return {userId: usrId};
    }, [usrId]),
  );
  
  const [updateOnBoardingBankInfo, {isLoading: bankInfoLoading}] = useUpdateOnBoardingBankInfoMutation(
    {fixedCacheKey: 'BankInfo'},
  );
  console.log('usrId', usrId);

  const formProfileMethod = useForm<FormProfileData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      middleName: '',
      profileImage: '',
    },
    resolver: yupResolver(ProfileSchema),
  });

  const formBankInfo = useForm<FormBankInfoData>({
    defaultValues: {
      accountName: '',
      accountNumber: '',
      bankName: '',
    },
    resolver: yupResolver(BankInfoSchema),
  });
  useEffect(() => {
    formProfileMethod.setValue('profileImage', profiles?.picture);
    formProfileMethod.setValue('lastName', profiles?.lastName);
    formProfileMethod.setValue('firstName', profiles?.firstName);
    formProfileMethod.setValue('middleName', profiles?.middlename);
    setUri(profiles?.picture)
  }, [usrId, profiles]);

  const handleProfilePrevious = () => {};
  const handleProfilenext: SubmitHandler<FormProfileData> = async data => {
    try {
      const userData: any = await updateOnBoardingProfile({
        firstName: data.firstName,
        lastName: data.lastName,
        middleName: data.middleName,
        image: data.profileImage,
        userId: usrId,
      }).unwrap();
      console.log('userData', userData);
      if (userData) {
        navigation.navigate('OnBoardingBankInfo');
      }
      // navigation.navigate('OnBoardingBankInfo')
    } catch (error) {
      console.log('error', error);
      switch (error.status) {
        case 401:
          alert(error.data.message);
          break;
        default:
          alert('error');
      }
    }
  };

  const handleBankInfoNext: SubmitHandler<FormBankInfoData> = async data => {
    try {
      const userData: any = await updateOnBoardingBankInfo({
        accountNo: data.accountNumber,
        accountName: data.accountName,
        bank: data.bankName,
        userId: usrId,
      }).unwrap();
    
      if (userData) {
        dispatch(setCredentials({...auth,accessToken:token, isOnBoarding: true}));
      }

    } catch (error) {
      console.log('error', error);
      switch (error.status) {
        case 401:
          alert(error.data.message);
          break;
        default:
          alert('error');
      }
    }
  };

  return {
    navigation,
    handleProfilenext,
    handleProfilePrevious,
    formProfileMethod,
    profileLoading,
    formBankInfo,
    profiles,
    handleBankInfoNext,
    bankInfoLoading,
    uri, setUri
  };
};
