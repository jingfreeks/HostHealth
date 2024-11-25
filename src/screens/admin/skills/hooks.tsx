import React from 'react';
import { Alert } from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {useGetSkillsQuery, useDeleteSkillsMutation} from '@/slice';

export const useSkillsHooks = () => {
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();

  const {
    data: skills,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetSkillsQuery<{
    refetch: () => void;
    data: any;
    isLoading: boolean;
    isSuccess: string;
    isError: boolean;
    error: any;
  }>('getSkills');

  const [deleteSkills, {isLoading: deleteLoading}] = useDeleteSkillsMutation();
  const handleDeleteSkills = async (id: string) => {
    try {
      await deleteSkills({
        id,
      }).unwrap();
    
    } catch (error) {
      Alert.alert(error?.data?.message);
    }
  };
  return {
    navigation,
    skills,
    bankLoading:isLoading,
    isLoading,
    isSuccess,
    isError,
    error,
    handleDeleteSkills,
    deleteLoading,
  };
};
