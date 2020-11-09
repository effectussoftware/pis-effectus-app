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

const Navigation = () => {
  const { user, info } = useSession();

  useRegisterDevice();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none">
        {/* <Stack.Screen name={AUTH_STACK} component={AuthStack} /> */}
        {/* <Stack.Screen name={APP_STACK} component={AppStack} /> */}
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
