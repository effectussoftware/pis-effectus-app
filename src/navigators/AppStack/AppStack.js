/* eslint-disable react/no-multi-comp */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MAIN_STACK, PROFILE_STACK } from 'constants/screens';
import { PRIMARY, LIGHT_GRAY } from 'constants/colors';
import testIds from 'constants/testIds';

import TabIcon from 'components/TabIcon';
import MainIcon from 'assets/images/tabIcons/MainIcon/default.png';
import ProfileIcon from 'assets/images/tabIcons/ProfileIcon/default.png';

import MainStack from './MainStack';
import ProfileStack from './ProfileStack';

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
        tabBarTestID: testIds.TABS.main,
        tabBarIcon: props => <TabIcon {...props} source={MainIcon} />,
      }}
    />
    <Tab.Screen
      name={PROFILE_STACK}
      component={ProfileStack}
      options={{
        tabBarTestID: testIds.TABS.profile,
        tabBarIcon: props => <TabIcon {...props} source={ProfileIcon} />,
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
