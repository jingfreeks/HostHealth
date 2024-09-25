import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {AuthNavigation} from '@/navigation/authnavigation';
import {Appnavigation} from '@/navigation/appnavigation';
import {DrawerNavigation} from '@/navigation/drawernavigation';
import {OnBoardinNavigation} from '@/navigation/onboardingnavigation';
import {Adminappnavigation} from '@/navigation/adminnavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StateForm, Cityform} from '@/screens';
import type {State} from '@/config/types';
import type {RootNavigationProps, AppNavigationProps} from './types';
import {useSelector} from 'react-redux';
import {Navigation} from './constant';

const Stack = createNativeStackNavigator<
  AppNavigationProps & RootNavigationProps
>();

const RootNavigationScreen = () => {
  const navigationRef = useNavigationContainerRef<
    AppNavigationProps & RootNavigationProps
  >();
  const token = useSelector((state: State) => state.auth.token);
  const onBoarding = useSelector((state: State) => state.auth.onBoarding);
  const usrRoles = useSelector((state: State) => state.auth.roles);

  const getStatScreen = () => {
    if (token && usrRoles.find(item => item?.toLowerCase() === 'admin')) {
      return (
        <Stack.Screen
          component={Adminappnavigation}
          name={'DrawerNav'}
          options={{headerShown: false}}
        />
      );
    } else if (
      token &&
      usrRoles.find(
        item => item?.toLowerCase() === 'applicant' || 'Employee',
      ) &&
      onBoarding
    ) {
      return (
        <Stack.Screen
          component={Appnavigation}
          name={Navigation.app}
          options={{headerShown: false}}
        />
      );
    } else if (
      token &&
      usrRoles.find(
        item => item?.toLowerCase() === 'applicant' || 'Employee',
      ) &&
      !onBoarding
    ) {
      return (
        <Stack.Screen
          component={OnBoardinNavigation}
          name={Navigation.onboarding}
          options={{headerShown: false}}
        />
      );
    } else {
      return (
        <Stack.Screen
          component={AuthNavigation}
          name={Navigation.auth}
          options={{headerShown: false}}
        />
      );
    }
  };
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={token ? Navigation.app : Navigation.auth}
        screenOptions={{
          headerBackTitleVisible: false,
        }}>
        {getStatScreen()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigationScreen;
