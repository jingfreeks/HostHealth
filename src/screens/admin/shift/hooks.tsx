import React from 'react';
import { Alert } from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {useGetShiftQuery, useDeleteShiftMutation} from '@/slice';

export const useShiftHooks = () => {
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();

  const {
    data: shift,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetShiftQuery<{
    refetch: () => void;
    data: any;
    isLoading: boolean;
    isSuccess: string;
    isError: boolean;
    error: any;
  }>('getShift');

  const [deleteDept, {isLoading: deleteLoading}] = useDeleteShiftMutation();
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
    shift,
    isLoading,
    isSuccess,
    isError,
    error,
    handleDeleteDept,
    deleteLoading,
  };
};
