import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {useGetStateQuery} from '@/slice/state';


export const useStateHooks=()=>{
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

    return{
        navigation,
        states,
        isLoading,
        isSuccess,
        isError,
        error,
    }
}