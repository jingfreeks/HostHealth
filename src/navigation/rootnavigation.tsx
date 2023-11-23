import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {AuthNavigation} from '@/navigation/authnavigation';
import {Appnavigation} from '@/navigation/appnavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {State} from '@/config/types';
import {useSelector} from 'react-redux';
import {Navigation} from './constant';

const Stack = createNativeStackNavigator();

const RootNavigationScreen = () => {
  const navigationRef = useNavigationContainerRef();
  const token = useSelector((state: State) => state.auth.token);
  // const token = '1212121212'
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={token ? Navigation.app : Navigation.auth}
        screenOptions={{
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          component={AuthNavigation}
          name={Navigation.auth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Appnavigation}
          name={Navigation.app}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigationScreen;
