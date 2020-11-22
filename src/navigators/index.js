import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from 'services/navigationService';
import useSession from 'hooks/useSession';
import useRegisterDevice from 'hooks/useRegisterDevice';
import { APP_STACK, AUTH_STACK } from 'constants/screens';

import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Stack = createStackNavigator();
/**
 * Navigation
 *
 * Based on the user login status it returns one stack or the other,
 * completely blocking the user from going back to the previous state of the app by doing
 * a back gesture on the device.
 *
 * @return Whole app navigation
 */
const Navigation = () => {
  const { user, info } = useSession();

  useRegisterDevice();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none">
        {user && info ? (
          <Stack.Screen name={APP_STACK} component={AppStack} />
        ) : (
          <Stack.Screen name={AUTH_STACK} component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
