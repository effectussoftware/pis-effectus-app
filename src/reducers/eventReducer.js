import { createReducer } from '@rootstrap/redux-tools';
import { getEventsCalendar } from 'actions/eventActions';
import { logout } from 'actions/userActions';

const initialState = {
  months: {},
};

const handleGetCommunicationSuccess = (state, { payload }) => {
  const { yearAndMonth, data } = payload;
  state.months[yearAndMonth] = data;
};

const handleResetSuccess = () => {
  return initialState;
};

export default createReducer(initialState, {
  [getEventsCalendar.success]: handleGetCommunicationSuccess,
  [logout.success]: handleResetSuccess,
});
