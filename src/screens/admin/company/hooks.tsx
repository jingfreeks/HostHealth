import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {Alert} from 'react-native'
import type {RootNavigationProps} from '@/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {useGetCompanyQuery, useDeleteCompanyMutation,useGetCityQuery} from '@/slice';

export const useCompanyHooks = () => {
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();

  const {
    data: company,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCompanyQuery<{
    refetch: () => void;
    data: any;
    isLoading: boolean;
    isSuccess: string;
    isError: boolean;
    error: any;
  }>('getCompany');

  const [deleteCompany, {isLoading: deleteLoading}] = useDeleteCompanyMutation();
  const handleDeleteCompany = async (id: string) => {
    try {
      await deleteCompany({
        id,
      }).unwrap();
    
    } catch (error) {
      Alert.alert(error?.data?.message);
    }
  };
  return {
    navigation,
    company,
    isLoading,
    isSuccess,
    isError,
    error,
    handleDeleteCompany,
    deleteLoading,
  };
};
