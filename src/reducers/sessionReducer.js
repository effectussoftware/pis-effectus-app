import { createReducer } from '@rootstrap/redux-tools';
import { login, logout, updateSession } from 'actions/userActions';

const initialState = {
  user: null,
  info: null,
};

const handleLoginSuccess = (state, { payload }) => {
  state.user = payload;
};

const handleLogoutSuccess = () => {
  return initialState;
};

const handleUpdateSession = (state, { payload }) => {
  state.info = payload;
};

export default createReducer(initialState, {
  [login.success]: handleLoginSuccess,
  [logout.success]: handleLogoutSuccess,
  [updateSession]: handleUpdateSession,
});
