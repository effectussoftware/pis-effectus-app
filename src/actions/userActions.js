import { GoogleSignin } from '@react-native-community/google-signin';
import { createThunk, createAction } from '@rootstrap/redux-tools';

import userService from 'services/userService';

export const login = createThunk('LOGIN', async token => userService.login({ token }).data);

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
