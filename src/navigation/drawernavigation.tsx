import React from 'react';
import type {AppNavigationProps, RootNavigationProps} from './types';
import {setCredentials} from '@/slice/auth';
import {useDispatch} from 'react-redux';
import {compose, ThunkDispatch} from '@reduxjs/toolkit';
import {Banks, City, State, Department,Shift} from '@/screens';
import {apiSlice} from '@/config/apiSlice';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator<
  RootNavigationProps & AppNavigationProps
>();
export const DrawerNavigation = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const handleSignout = async () => {
    await dispatch(
      setCredentials({user: null, accessToken: null, userId: null}),
    );
    await dispatch(apiSlice.util.resetApiState());
  };
  return (
    <Drawer.Navigator
      initialRouteName="City"
      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Sign-out" onPress={() => handleSignout()} />
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen name="City" component={City} />
      <Drawer.Screen name="State" component={State} />
      <Drawer.Screen name="Banks" component={Banks} />
      <Drawer.Screen name="Department" component={Department} />
      <Drawer.Screen name="Shift" component={Shift} />
    </Drawer.Navigator>
  );
};
