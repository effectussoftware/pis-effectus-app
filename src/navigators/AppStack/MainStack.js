import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MAIN_SCREEN } from 'constants/screens';
import { HEADER_OPTIONS } from 'constants/navigationOptions';

import MainScreen from 'screens/MainScreen';

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator screenOptions={HEADER_OPTIONS}>
    <Stack.Screen name={MAIN_SCREEN} component={MainScreen} />
  </Stack.Navigator>
);

export default MainStack;
