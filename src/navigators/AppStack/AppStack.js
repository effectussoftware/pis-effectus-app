/* eslint-disable react/no-multi-comp */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COMMUNICATION_SCREEN, TAB_NAVIGATOR } from 'constants/screens';
import { HEADER_OPTIONS } from 'constants/navigationOptions';

import CommunicationScreen from 'screens/CommunicationScreen';
import TabNavigator, { getHeaderTitle } from './TabNavigator';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator screenOptions={HEADER_OPTIONS}>
    <Stack.Screen
      name={TAB_NAVIGATOR}
      component={TabNavigator}
      options={({ route }) => ({
        headerTitle: getHeaderTitle(route),
      })}
    />
    <Stack.Screen name={COMMUNICATION_SCREEN} component={CommunicationScreen} />
  </Stack.Navigator>
);

export default AppStack;
