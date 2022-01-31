import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { createThunk, createAction } from '@rootstrap/redux-tools';

import userService from 'services/userService';

/**
 * registerDevice
 *
 * @param {string} token: firebase token to be registered on the backend
 *
 * @return thunk, statusActions to be called and querried on the reducers
 * Nothing to do with the response, the token is already saved on the session reducer.
 */
export const registerDevice = createThunk('REGISTER_DEVICE', async (_, getState) => {
  const { firebaseToken } = getState().session;
  await userService.registerDevice(firebaseToken);
});

/**
 * login
 *
 * @param {string} token: google auth token to be used to login on the backend
 *
 * @return thunk, statusActions to be called and querried on the reducers
 * The user can be saved on the reducer on login.success with the key payload.
 * The saving of the session itself is already handled by the axios response interceptor
 */
export const login = createThunk('LOGIN', async token => {
  const { data } = await userService.login({ token });
  return data.user;
});

/**
 * logout
 *
 * @return thunk, statusActions to be called and querried on the reducers
 * effects on the store can be triggered by querying `logout.success`.
 * All reducers should query thing success and return to their initialState.
 */
export const logout = createThunk('LOGOUT', async () => {
  try {
    await userService.logout();
  } catch ({ response }) {
    // logout user anyways by catching error and allowing success to be
  } finally {
    try {
      const isSignedIn = await GoogleSignin.isSignedIn();
      if (isSignedIn) {
        await GoogleSignin.signOut();
      }
    } catch (err) {
      // don't block the user from logging out in this case
    }
  }
});

/**
 * updateSession
 *
 * @param {object} session: { token, uid, client } comes from the backend
 *
 * @return thunk, statusActions to be called and querried on the reducers
 * The session can be saved by querying `updateSession` and accessing it with the key payload.
 */
export const updateSession = createAction('UPDATE_SESSION');

/**
 * updateFirebaseToken
 *
 * @param {string} token: firebase token
 *
 * @return thunk, statusActions to be called and querried on the reducers
 * The token can be saved by querying `updateFirebaseToken` and accessing it with the key payload.
 */
export const updateFirebaseToken = createAction('UPDATE_FIREBASE_TOKEN');
