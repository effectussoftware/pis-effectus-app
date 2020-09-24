/* eslint-disable react/no-multi-comp */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MAIN_STACK } from 'constants/screens';
import { PRIMARY, LIGHT_GRAY } from 'constants/colors';

import TabIcon from 'components/TabIcon';
import MainIcon from 'assets/images/tabIcons/MainIcon/default.png';

import MainStack from './MainStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: LIGHT_GRAY,
      inactiveTintColor: PRIMARY,
      showLabel: false,
    }}>
    <Tab.Screen
      name={MAIN_STACK}
      component={MainStack}
      options={{
        tabBarIcon: props => <TabIcon {...props} source={MainIcon} />,
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
