import { GoogleSignin } from '@react-native-community/google-signin';
import { createThunk, createAction } from '@rootstrap/redux-tools';

import userService from 'services/userService';

export const registerDevice = createThunk('REGISTER_DEVICE', async (_, getState) => {
  const { firebaseToken } = getState().session;
  await userService.registerDevice(firebaseToken);
});

export const login = createThunk('LOGIN', async token => {
  const { data } = await userService.login({ token });
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
export const updateFirebaseToken = createAction('UPDATE_FIREBASE_TOKEN');
