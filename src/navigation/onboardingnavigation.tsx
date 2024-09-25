import React from 'react';
import {OnBoardingProfile, OnBoardingBankInfo} from '@/screens';
import type {AppNavigationProps, RootNavigationProps} from './types';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<
  RootNavigationProps & AppNavigationProps
>();

export const OnBoardinNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={OnBoardingProfile}
        name="OnBoardingProfile"
        options={{
          headerShown: true,
          title: 'Personal Information',
          headerLeft: () => null,
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        component={OnBoardingBankInfo}
        name="OnBoardingBankInfo"
        options={{
          headerShown: true,
          title: 'Bank Information',
          headerLeft: () => null,
          headerBackVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};
