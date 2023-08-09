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
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <ImageHeaderStyled source={HomeIcon} resizeMode={'contain'} />
          ),
          // eslint-disable-next-line react/no-unstable-nested-components
          headerLeft: () => (
            <HeaderLeftStyled>
              <ImageHeaderStyled
                source={HamburgerIcon}
                resizeMode={'contain'}
                size={25}
              />
            </HeaderLeftStyled>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Pcities}
        options={{
          tabBarLabel: 'Search',
          title: 'Search',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <ImageHeaderStyled source={SearchIcon} resizeMode={'contain'} />
          ),
        }}
      />
      <Tab.Screen
        name="MyJob"
        component={MyJobs}
        options={{
          tabBarLabel: 'My Jobs ',
          title: 'My Jobs',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <ImageHeaderStyled source={MyjobsIcon} resizeMode={'contain'} />
          ),
        }}
      />
      <Tab.Screen
        name="TimeCard"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Time Card',
          title: 'Time Card',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <ImageHeaderStyled source={TimecardIcon} resizeMode={'contain'} />
          ),
        }}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};

export default BottomTabScreen;
