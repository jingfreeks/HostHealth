import React from 'react';
import {Alert} from 'react-native'
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {useGetCityQuery, useDeleteCityMutation} from '@/slice';

export const useCityHooks = () => {
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();

  const {
    data: city,
    refetch:cityRefresh,
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
      Alert.alert(error?.data?.message);
    }
  };
  const onRefresh=async()=>{
    await cityRefresh()
  }
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
    onRefresh
  };
};
