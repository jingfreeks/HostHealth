import React from 'react';
import {Alert} from 'react-native'
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {useGetStateQuery, useDeleteStatesMutation} from '@/slice';

export const useStateHooks = () => {
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();

  const {
    data: states,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetStateQuery<{
    refetch: () => void;
    data: any;
    isLoading: boolean;
    isSuccess: string;
    isError: boolean;
    error: any;
  }>('getNotes');

  const [deleteStates, {isLoading: deleteLoading}] = useDeleteStatesMutation();
  const handleDeleteState = async (id: string) => {
    try {
      await deleteStates({
        id,
      }).unwrap();
    
    } catch (error) {
      Alert.alert(error?.data?.message);
    }
  };
  return {
    navigation,
    states,
    isLoading,
    isSuccess,
    isError,
    error,
    handleDeleteState,
    deleteLoading,
  };
};
