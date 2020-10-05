import { GoogleSignin } from '@react-native-community/google-signin';
import { createThunk, createAction } from '@rootstrap/redux-tools';

import userService from 'services/userService';
import parseError from 'utils/parseError';

export const login = createThunk('LOGIN', async token => {
  try {
    const { data } = await userService.login({ token });
    return data.user;
  } catch ({ response }) {
    throw parseError(response);
  }
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

export const { success: loginSuccess } = login;
export const { success: logoutSuccess } = logout;
