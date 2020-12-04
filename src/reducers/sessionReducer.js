import { createReducer } from '@rootstrap/redux-tools';
import {
  login,
  logout,
  updateSession,
  updateFirebaseToken,
  registerDevice,
} from 'actions/userActions';

const initialState = {
  user: null,
  info: null,
  firebaseToken: null,
  registeredDevice: false,
};

const handleLoginSuccess = (state, { payload }) => {
  state.user = payload;
};

const handleLogoutSuccess = state => {
  state.user = null;
  state.info = null;
  state.registeredDevice = false;
};

const handleUpdateSession = (state, { payload }) => {
  state.info = payload;
};

const handleUpdateFirebaseToken = (state, { payload }) => {
  state.firebaseToken = payload;
};

const handleRegisterDeviceSuccess = state => {
  state.registeredDevice = true;
};

export default createReducer(initialState, {
  [login.success]: handleLoginSuccess,
  [logout.success]: handleLogoutSuccess,
  [updateSession]: handleUpdateSession,
  [updateFirebaseToken]: handleUpdateFirebaseToken,
  [registerDevice.success]: handleRegisterDeviceSuccess,
});
