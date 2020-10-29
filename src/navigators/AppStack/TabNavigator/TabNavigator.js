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
import { useSetNavigationOptions } from 'hooks';
import mainScreenNavigationOptions from 'screens/MainScreen/MainScreen.navigationOptions';
import profileScreenNavigationOptions from 'screens/ProfileScreen/ProfileScreen.navigationOptions';
import { object } from 'prop-types';

const Tab = createBottomTabNavigator();

const navigationOptions = {
  [MAIN_SCREEN]: mainScreenNavigationOptions,
  [PROFILE_SCREEN]: profileScreenNavigationOptions,
};

const TabNavigator = ({ route }) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? MAIN_SCREEN;
  useSetNavigationOptions(navigationOptions[routeName]);

  return (
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
};

TabNavigator.propTypes = {
  route: object.isRequired,
};

export default TabNavigator;
