import React from 'react'
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';

export const useProfileHooks=()=>{
    const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
    return{
        navigation
    }
}