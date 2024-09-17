import React from 'react';
import {Navigation} from './constant';
import {StateForm, Cityform, DepartmentForm, ShiftForm} from '@/screens';
import {DrawerNavigation} from '@/navigation/drawernavigation';
import type {AppNavigationProps, RootNavigationProps} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<
  RootNavigationProps & AppNavigationProps
>();

export const Adminappnavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={DrawerNavigation}
        name={Navigation.bottomtab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={StateForm}
        name={'StateForm'}
        options={{headerShown: true, title: 'State Form'}}
      />
      <Stack.Screen
        component={Cityform}
        name={'Cityform'}
        options={{headerShown: true, title: 'City Form'}}
      />
      <Stack.Screen
        component={DepartmentForm}
        name={'DepartmentForm'}
        options={{headerShown: true, title: 'City Form'}}
      />
      <Stack.Screen
        component={ShiftForm}
        name={'ShiftForm'}
        options={{headerShown: true, title: 'Shift Form'}}
      />
    </Stack.Navigator>
  );
};
