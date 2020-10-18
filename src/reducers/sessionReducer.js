import { createReducer } from '@rootstrap/redux-tools';
import { login, logout, updateSession, updateFirebaseToken } from 'actions/userActions';

const initialState = {
  user: null,
  info: null,
  firebaseToken: null,
};

const handleLoginSuccess = (state, { payload }) => {
  state.user = payload;
};

const handleLogoutSuccess = state => {
  state.user = null;
  state.info = null;
};

const handleUpdateSession = (state, { payload }) => {
  state.info = payload;
};
const handleUpdateFirebaseToken = (state, { payload }) => {
  state.firebaseToken = payload;
};

export default createReducer(initialState, {
  [login.success]: handleLoginSuccess,
  [logout.success]: handleLogoutSuccess,
  [updateSession]: handleUpdateSession,
  [updateFirebaseToken]: handleUpdateFirebaseToken,
});
