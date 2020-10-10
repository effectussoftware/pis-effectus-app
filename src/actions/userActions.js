import messaging from '@react-native-firebase/messaging';
import { GoogleSignin } from '@react-native-community/google-signin';
import { createThunk, createAction } from '@rootstrap/redux-tools';

import userService from 'services/userService';

export const registerDevice = createThunk('REGISTER_DEVICE', async () => {
  if (!messaging().isDeviceRegisteredForRemoteMessages) {
    await messaging().registerDeviceForRemoteMessages();
  }
  const token = await messaging().getToken();
  await userService.registerDevice(token);
});

export const login = createThunk('LOGIN', async (token, dispatch) => {
  const { data } = await userService.login({ token });
  dispatch(registerDevice());
  return data.user;
});

export const logout = createThunk('LOGOUT', async () => {
  try {
    await userService.logout();
  } catch ({ response }) {
    // logout user anyways by catching error and allowing success to be
  } finally {
    await GoogleSignin.signOut();
  }
});

export const updateSession = createAction('UPDATE_SESSION');
