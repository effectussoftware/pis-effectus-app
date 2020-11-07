import { createReducer } from '@rootstrap/redux-tools';
import { getEvent } from 'actions/eventActions';
import { logout } from 'actions/userActions';

const initialState = {
  item: undefined,
};

const handleGetEventSuccess = (state, { payload }) => {
  state.item = payload;
};

const handleResetSuccess = () => {
  return initialState;
};

export default createReducer(initialState, {
  [getEvent.success]: handleGetEventSuccess,
  [getEvent.reset]: handleResetSuccess,
  [logout.success]: handleResetSuccess,
});
