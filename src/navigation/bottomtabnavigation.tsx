import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ImageHeaderStyled, HeaderLeftStyled} from './styles';
import {
  HomeIcon,
  MyjobsIcon,
  SearchIcon,
  TimecardIcon,
  HamburgerIcon,
} from '@/assets';
import {HomeScreen, Pcities, MyJobs} from '@/screens';
import {colors} from '@/utils/themes';
const Tab = createBottomTabNavigator();

const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.black,
      }}>
      <Tab.Screen
        component={HomeScreen}
        name="Home"
        options={{
          tabBarLabel: 'Home',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <ImageHeaderStyled resizeMode={'contain'} source={HomeIcon} />
          ),
          // eslint-disable-next-line react/no-unstable-nested-components
          headerLeft: () => (
            <HeaderLeftStyled>
              <ImageHeaderStyled
                resizeMode={'contain'}
                size={25}
                source={HamburgerIcon}
              />
            </HeaderLeftStyled>
          ),
        }}
      />
      <Tab.Screen
        component={Pcities}
        name="Search"
        options={{
          tabBarLabel: 'Search',
          title: 'Search',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <ImageHeaderStyled resizeMode={'contain'} source={SearchIcon} />
          ),
        }}
      />
      <Tab.Screen
        component={MyJobs}
        name="MyJob"
        options={{
          tabBarLabel: 'My Jobs ',
          title: 'My Jobs',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <ImageHeaderStyled resizeMode={'contain'} source={MyjobsIcon} />
          ),
        }}
      />
      <Tab.Screen
        component={HomeScreen}
        name="TimeCard"
        options={{
          tabBarLabel: 'Time Card',
          title: 'Time Card',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <ImageHeaderStyled resizeMode={'contain'} source={TimecardIcon} />
          ),
        }}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};

export default BottomTabScreen;
