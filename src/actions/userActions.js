import messaging from '@react-native-firebase/messaging';
import { createThunk, createAction } from '@rootstrap/redux-tools';

import userService from 'services/userService';
import parseError from 'utils/parseError';

export const registerDevice = createThunk('REGISTER_DEVICE', async () => {
  try {
    if (!messaging().isDeviceRegisteredForRemoteMessages) {
      await messaging().registerDeviceForRemoteMessages();
    }
    const token = await messaging().getToken();
    await userService.registerDevice(token);
  } catch ({ response }) {
    throw parseError(response);
  }
});

export const login = createThunk('LOGIN', async (user, dispatch) => {
  try {
    // const {
    //   data: { user: loggedUser },
    // } = await userService.login({ user });
    dispatch(registerDevice());
    // return loggedUser;
  } catch ({ response }) {
    throw parseError(response);
  }
});

export const logout = createThunk('LOGOUT', async () => {
  try {
    await userService.logout();
  } catch ({ response }) {
    throw parseError(response);
  }
});

export const signUp = createThunk('SIGNUP', async (user, dispatch) => {
  try {
    const { data } = await userService.signUp({ user });
    dispatch(registerDevice());
    return data;
  } catch ({ response }) {
    throw parseError(response);
  }
});

export const updateSession = createAction('UPDATE_SESSION');

export const { success: loginSuccess } = login;
export const { success: signUpSuccess } = signUp;
export const { success: logoutSuccess } = logout;
