import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { PROFILE_SCREEN } from 'constants/screens';
import { HEADER_OPTIONS } from 'constants/navigationOptions';

import ProfileScreen from 'screens/ProfileScreen';

const Stack = createStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator screenOptions={HEADER_OPTIONS}>
    <Stack.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
  </Stack.Navigator>
);

export default ProfileStack;
