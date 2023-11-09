import React from 'react';
import bottomtab from './bottomtabnavigation';
import {JobsDetails} from '@/screens';
import type {AppNavigationProps} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<AppNavigationProps>();

export const Appnavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={bottomtab}
        name="BottomTab"
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
