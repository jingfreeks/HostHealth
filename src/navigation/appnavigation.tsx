import React from 'react';
import bottomtab from './bottomtabnavigation';
import {Navigation} from './constant';
import {JobsDetails, OnBoardingProfile, OnBoardingBankInfo} from '@/screens';
import type {AppNavigationProps, RootNavigationProps} from './types';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<
  RootNavigationProps & AppNavigationProps
>();

export const Appnavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={bottomtab}
        name={Navigation.bottomtab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={JobsDetails}
        name="JobsDetails"
        options={{headerShown: true, title: 'JOB DETAILS'}}
      />
    </Stack.Navigator>
  );
};
