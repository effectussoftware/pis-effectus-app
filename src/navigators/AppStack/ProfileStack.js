import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { PROFILE_SCREEN, ONE_ON_ONE_SCREEN } from 'constants/screens';
import { HEADER_OPTIONS } from 'constants/navigationOptions';

import ProfileScreen from 'screens/ProfileScreen';
import OneOnOneScreen from 'screens/OneOnOneScreen';

const Stack = createStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator screenOptions={HEADER_OPTIONS}>
    <Stack.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
    <Stack.Screen name={ONE_ON_ONE_SCREEN} component={OneOnOneScreen} />
  </Stack.Navigator>
);

export default ProfileStack;
