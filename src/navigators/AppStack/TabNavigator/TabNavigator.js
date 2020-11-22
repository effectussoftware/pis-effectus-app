/* eslint-disable react/no-multi-comp */
import React from 'react';
import { object } from 'prop-types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import MainIcon from 'assets/images/tabIcons/MainIcon/default.png';
import EventsIcon from 'assets/images/tabIcons/EventsIcon/default.png';
import ProfileIcon from 'assets/images/tabIcons/ProfileIcon/default.png';
import { PRIMARY, LIGHT_GRAY } from 'constants/colors';
import { EVENTS_SCREEN, MAIN_SCREEN, PROFILE_SCREEN } from 'constants/screens';
import testIds from 'constants/testIds';
import { useSetNavigationOptions } from 'hooks';

import { TabIcon } from 'components';
import MainScreen from 'screens/MainScreen';
import EventsScreen from 'screens/EventsScreen';
import ProfileScreen from 'screens/ProfileScreen';

import mainScreenNavigationOptions from 'screens/MainScreen/MainScreen.navigationOptions';
import eventsScreenNavigationOptions from 'screens/EventsScreen/EventsScreen.navigationOptions';
import profileScreenNavigationOptions from 'screens/ProfileScreen/ProfileScreen.navigationOptions';

const Tab = createBottomTabNavigator();

const navigationOptions = {
  [MAIN_SCREEN]: mainScreenNavigationOptions,
  [EVENTS_SCREEN]: eventsScreenNavigationOptions,
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
        name={EVENTS_SCREEN}
        component={EventsScreen}
        options={{
          tabBarTestID: testIds.TABS.events,
          tabBarIcon: props => <TabIcon {...props} source={EventsIcon} />,
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
