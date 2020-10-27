import { createReducer } from '@rootstrap/redux-tools';
import { getCommunication } from 'actions/communicationActions';
import { logout } from 'actions/userActions';

const initialState = {
  data: undefined,
};

const handleGetCommunicationSuccess = (state, { payload }) => {
  state.data = payload;
};

const handleResetSuccess = () => {
  return initialState;
};

export default createReducer(initialState, {
  [getCommunication.success]: handleGetCommunicationSuccess,
  [getCommunication.reset]: handleResetSuccess,
  [logout.success]: handleResetSuccess,
});
