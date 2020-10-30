import { createReducer } from '@rootstrap/redux-tools';
import { getOneOnOne, getOneOnOnes } from 'actions/oneOnOneActions';
import { logout } from 'actions/userActions';

const initialState = {
  data: undefined,
  myOneOnOnes: [],
};

const handleGetOneOnOneSuccess = (state, { payload }) => {
  state.data = payload;
};

const handleGetOneOnOnesSuccess = (state, { payload }) => {
  state.myOneOnOnes = payload;
};

const handleResetSuccess = () => {
  return initialState;
};

export default createReducer(initialState, {
  [getOneOnOne.success]: handleGetOneOnOneSuccess,
  [getOneOnOne.reset]: handleResetSuccess,
  [getOneOnOnes.success]: handleGetOneOnOnesSuccess,
  [logout.success]: handleResetSuccess,
});
