/* eslint-disable react/no-multi-comp */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { MAIN_SCREEN, PROFILE_SCREEN } from 'constants/screens';
import { PRIMARY, LIGHT_GRAY } from 'constants/colors';
import testIds from 'constants/testIds';

import TabIcon from 'components/TabIcon';
import MainIcon from 'assets/images/tabIcons/MainIcon/default.png';
import ProfileIcon from 'assets/images/tabIcons/ProfileIcon/default.png';

import MainScreen from 'screens/MainScreen';
import ProfileScreen from 'screens/ProfileScreen';
import strings from 'locale';

const Tab = createBottomTabNavigator();

export const getHeaderTitle = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? MAIN_SCREEN;

  if (routeName === MAIN_SCREEN) return strings.MAIN_SCREEN.title;
  if (routeName === PROFILE_SCREEN) return strings.PROFILE_SCREEN.title;
};

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: LIGHT_GRAY,
      inactiveTintColor: PRIMARY,
      showLabel: false,
    }}>
    <Tab.Screen
      name={MAIN_SCREEN}
      component={MainScreen}
      options={{
        tabBarTestID: testIds.TABS.main,
        tabBarIcon: props => <TabIcon {...props} source={MainIcon} />,
      }}
    />
    <Tab.Screen
      name={PROFILE_SCREEN}
      component={ProfileScreen}
      options={{
        tabBarTestID: testIds.TABS.profile,
        tabBarIcon: props => <TabIcon {...props} source={ProfileIcon} />,
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
