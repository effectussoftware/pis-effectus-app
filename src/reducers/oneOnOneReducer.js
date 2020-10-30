import { createReducer } from '@rootstrap/redux-tools';
import { getOneOnOnes } from 'actions/oneOnOneActions';
import { logout } from 'actions/userActions';

const initialState = {
  data: [],
};

const handleGetOneOnOnesSuccess = (state, { payload }) => {
  state.data = payload;
};

const handleResetSuccess = () => {
  return initialState;
};

export default createReducer(initialState, {
  [getOneOnOnes.success]: handleGetOneOnOnesSuccess,
  [logout.success]: handleResetSuccess,
});
