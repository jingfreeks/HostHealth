import React, {useMemo, useEffect,useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';
import {useForm, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  useGetOnBoardingBankInfoQuery,
  useUpdateOnBoardingBankInfoMutation,
} from '@/slice';
import {useSelector} from 'react-redux';
import {selectCurrentUserId, setCredentials,selectCurrentAuth,selectCurrentToken} from '@/slice/auth';
import * as yup from 'yup';
import {BankInfoSchema} from './schema';
import {useDispatch} from 'react-redux';
import { ThunkDispatch} from '@reduxjs/toolkit';

export const useOnBoardingHooks = () => {
  type FormBankInfoData = yup.InferType<typeof BankInfoSchema>;
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();

  const usrId = useSelector(selectCurrentUserId);
  const [uri, setUri] = useState<string>('');

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


  const formBankInfo = useForm<FormBankInfoData>({
    defaultValues: {
      accountName: '',
      accountNumber: '',
      bankName: '',
    },
    resolver: yupResolver(BankInfoSchema),
  });
  useEffect(() => {
    formBankInfo.setValue('accountName', bankInfo?.accountName);
    formBankInfo.setValue('accountNumber', bankInfo?.accountNo?.toString());
    formBankInfo.setValue('bankName', bankInfo?.bank);
  }, [bankInfo]);

  console.log('bankInfo',bankInfo?.accountNo)
  const handleBankInfoSave: SubmitHandler<FormBankInfoData> = async data => {
    try {
      const userData: any = await updateOnBoardingBankInfo({
        accountNo: data.accountNumber,
        accountName: data.accountName,
        bank: data.bankName,
        userId: usrId,
      }).unwrap();
    
      if (userData) {
        navigation.goBack();
      }
    } catch (error) {
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
    formBankInfo,
    handleBankInfoSave,
    bankInfoLoading,
    uri, setUri
  };
};
