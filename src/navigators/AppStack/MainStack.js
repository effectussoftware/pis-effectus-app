import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { EVENT_DETAIL_SCREEN, MAIN_SCREEN } from 'constants/screens';
import { HEADER_OPTIONS } from 'constants/navigationOptions';

import MainScreen from 'screens/MainScreen';
import EventDetailScreen from 'screens/EventDetailScreen';

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator screenOptions={HEADER_OPTIONS}>
    <Stack.Screen name={MAIN_SCREEN} component={MainScreen} />
    <Stack.Screen name={EVENT_DETAIL_SCREEN} component={EventDetailScreen} />
  </Stack.Navigator>
);

export default MainStack;
