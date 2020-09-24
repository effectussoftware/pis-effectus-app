/* eslint-disable react/no-multi-comp */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MAIN_SCREEN } from 'constants/screens';
import { PRIMARY, LIGHT_GRAY } from 'constants/colors';

import TabIcon from 'components/TabIcon';
import MainIcon from 'assets/images/tabIcons/MainIcon/default.png';

import MainScreen from 'screens/MainScreen';

const Tab = createBottomTabNavigator();

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
        tabBarIcon: props => <TabIcon {...props} source={MainIcon} />,
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
