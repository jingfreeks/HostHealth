import React from 'react';
import { Alert } from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {useGetDeptQuery, useDeleteDeptMutation} from '@/slice';

export const useDepartmentHooks = () => {
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();

  const {
    data: dept,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDeptQuery<{
    refetch: () => void;
    data: any;
    isLoading: boolean;
    isSuccess: string;
    isError: boolean;
    error: any;
  }>('getDept');

  const [deleteDept, {isLoading: deleteLoading}] = useDeleteDeptMutation();
  const handleDeleteDept = async (id: string) => {
    try {
      await deleteDept({
        id,
      }).unwrap();
    
    } catch (error) {
      Alert.alert(error?.data?.message);
    }
  };
  return {
    navigation,
    dept,
    isLoading,
    isSuccess,
    isError,
    error,
    handleDeleteDept,
    deleteLoading,
  };
};
