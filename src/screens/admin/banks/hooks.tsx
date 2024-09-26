import React from 'react';
import { Alert } from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {useGetBanksQuery, useDeleteBanksMutation} from '@/slice';

export const useBankHooks = () => {
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();

  const {
    data: bank,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetBanksQuery<{
    refetch: () => void;
    data: any;
    isLoading: boolean;
    isSuccess: string;
    isError: boolean;
    error: any;
  }>('getBanks');

  const [deleteBanks, {isLoading: deleteLoading}] = useDeleteBanksMutation();
  const handleDeleteBanks = async (id: string) => {
    try {
      await deleteBanks({
        id,
      }).unwrap();
    
    } catch (error) {
      Alert.alert(error?.data?.message);
    }
  };
  return {
    navigation,
    bank,
    isLoading,
    isSuccess,
    isError,
    error,
    handleDeleteBanks,
    deleteLoading,
  };
};
