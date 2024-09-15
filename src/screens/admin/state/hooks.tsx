import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';
import {useNavigation} from '@react-navigation/native';

export const useStateHooks=()=>{
    const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
    return{
        navigation
    }
}