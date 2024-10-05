import React from 'react';
import bottomtab from './bottomtabnavigation';
import {Navigation} from './constant';
import {JobsDetails, ProfileDetails, ProfileBankInfo,CityJobsList} from '@/screens';
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
      <Stack.Screen
        component={ProfileDetails}
        name="ProfileDetails"
        options={{
          headerShown: true,
          title: 'Personal Information',
          headerLeft: () => null,
          headerBackTitle: 'Back',
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        component={ProfileBankInfo}
        name="ProfileBankInfo"
        options={{
          headerShown: true,
          title: 'Bank Information',
          headerLeft: () => null,
          headerBackTitle: 'Back',
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        component={CityJobsList}
        name="CityJobsList"
        options={{
          headerShown: true,
          title: 'Jobs list Information',
          headerLeft: () => null,
          headerBackTitle: 'Back',
          headerBackVisible: true,
        }}
      />
    </Stack.Navigator>
  );
};
