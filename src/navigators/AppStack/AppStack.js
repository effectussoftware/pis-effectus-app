/* eslint-disable react/no-multi-comp */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COMMUNICATION_SCREEN, TAB_NAVIGATOR, ONE_ON_ONE_SCREEN } from 'constants/screens';
import { HEADER_OPTIONS } from 'constants/navigationOptions';

import OneOnOneScreen from 'screens/OneOnOneScreen';
import CommunicationScreen from 'screens/CommunicationScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator screenOptions={HEADER_OPTIONS}>
    <Stack.Screen name={TAB_NAVIGATOR} component={TabNavigator} />
    <Stack.Screen name={COMMUNICATION_SCREEN} component={CommunicationScreen} />
    <Stack.Screen name={ONE_ON_ONE_SCREEN} component={OneOnOneScreen} />
  </Stack.Navigator>
);

export default AppStack;
