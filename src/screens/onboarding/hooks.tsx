import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';
import {useForm, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useUpdateProfileMutation} from '@/slice/profile';
import {useSelector} from 'react-redux';
import {selectCurrentUserId} from '@/slice/auth';
import * as yup from 'yup';
import {ProfileSchema,BankInfoSchema} from './schema';

export const useOnBoardingHooks = () => {
  type FormProfileData = yup.InferType<typeof ProfileSchema>;
  type FormBankInfoData= yup.InferType<typeof BankInfoSchema>;
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
  const usrId = useSelector(selectCurrentUserId);
  const [updateProfile, {isLoading: profileLoading}] = useUpdateProfileMutation(
    {fixedCacheKey: 'Profile'},
  );

  const formProfileMethod = useForm<FormProfileData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      middleName: '',
      profileImage:'',
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

  const handleProfilePrevious = () => {};
  const handleProfilenext: SubmitHandler<FormProfileData> = async data => {
    try {
      const userData: any = await updateProfile({
        firstName: data.firstName,
        lastName: data.lastName,
        middleName: data.middleName,
        image:data.profileImage,
        userId: usrId,
      }).unwrap();
      if (userData) {
        navigation.navigate('OnBoardingBankInfo')
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
  return {
    navigation,
    handleProfilenext,
    handleProfilePrevious,
    formProfileMethod,
    profileLoading,
    formBankInfo
  };
};
