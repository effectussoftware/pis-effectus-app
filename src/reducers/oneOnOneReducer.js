import { createReducer } from '@rootstrap/redux-tools';
import { getOneOnOne, getOneOnOnes } from 'actions/oneOnOneActions';
import { logout } from 'actions/userActions';

const initialState = {
  item: undefined,
  list: [],
};

const handleGetOneOnOneSuccess = (state, { payload }) => {
  state.item = payload;
};

const handleGetOneOnOnesSuccess = (state, { payload }) => {
  state.list = payload;
};

const handleResetSuccess = () => {
  return initialState;
};

export default createReducer(initialState, {
  [getOneOnOne.success]: handleGetOneOnOneSuccess,
  [getOneOnOne.reset]: handleResetSuccess,
  [getOneOnOnes.success]: handleGetOneOnOnesSuccess,
  // Clean reducer on logout
  [logout.success]: handleResetSuccess,
});
