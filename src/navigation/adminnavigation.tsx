import React from 'react';
import {Navigation} from './constant';
import {
  StateForm,
  Cityform,
  DepartmentForm,
  ShiftForm,
  CompanyForm,
  BankForm,
  JobsForm,
  SkillsForm,
  AdminJobDetails,
} from '@/screens';
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
        options={{
          headerShown: true,
          title: 'State Form',
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        component={Cityform}
        name={'Cityform'}
        options={{
          headerShown: true,
          title: 'City Form',
          headerBackVisible: true,
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        component={DepartmentForm}
        name={'DepartmentForm'}
        options={{
          headerShown: true,
          title: 'Department Form',
          headerBackVisible: true,
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        component={ShiftForm}
        name={'ShiftForm'}
        options={{
          headerShown: true,
          title: 'Shift Form',
          headerBackVisible: true,
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        component={CompanyForm}
        name={'CompanyForm'}
        options={{
          headerShown: true,
          title: 'Company Form',
          headerBackVisible: true,
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        component={BankForm}
        name={'BankForm'}
        options={{
          headerShown: true,
          title: 'Bank Form',
          headerBackVisible: true,
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        component={JobsForm}
        name={'JobsForm'}
        options={{
          headerShown: true,
          title: 'Jobs Form',
          headerBackVisible: true,
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        component={AdminJobDetails}
        name={'AdminJobDetails'}
        options={{
          headerShown: true,
          title: 'Jobs Details',
          headerBackVisible: true,
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        component={SkillsForm}
        name={'SkillsForm'}
        options={{
          headerShown: true,
          title: 'Jobs Details',
          headerBackVisible: true,
          headerBackTitle: 'Back',
        }}
      />
    </Stack.Navigator>
  );
};
