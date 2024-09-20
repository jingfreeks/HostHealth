import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {useGetCityQuery, useDeleteCityMutation} from '@/slice/city';

export const useCityHooks = () => {
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();

  const {
    data: city,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCityQuery<{
    refetch: () => void;
    data: any;
    isLoading: boolean;
    isSuccess: string;
    isError: boolean;
    error: any;
  }>('getCity');

  const [deleteCity, {isLoading: deleteLoading}] = useDeleteCityMutation();
  const handleDeleteCity = async (id: string) => {
    try {
      await deleteCity({
        id,
      }).unwrap();
    
    } catch (error) {
      alert(error?.data?.message);
    }
  };
  return {
    navigation,
    city,
    isLoading,
    cityLoading:isLoading,
    isSuccess,
    isError,
    error,
    handleDeleteCity,
    deleteLoading,
  };
};
