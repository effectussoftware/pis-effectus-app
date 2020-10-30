import { createReducer } from '@rootstrap/redux-tools';
import { getOneOnOne } from 'actions/oneOnOneActions';
import { logout } from 'actions/userActions';

const initialState = {
  data: undefined,
};

const handleGetOneOnOneSuccess = (state, { payload }) => {
  state.data = payload;
};

const handleResetSuccess = () => {
  return initialState;
};

export default createReducer(initialState, {
  [getOneOnOne.success]: handleGetOneOnOneSuccess,
  [getOneOnOne.reset]: handleResetSuccess,
  [logout.success]: handleResetSuccess,
});
