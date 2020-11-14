import { createReducer } from '@rootstrap/redux-tools';
import { getEvent, getEventsCalendar } from 'actions/eventActions';
import { logout } from 'actions/userActions';

const initialState = {
  item: undefined,
  months: {},
};

const handleGetEventSuccess = (state, { payload }) => {
  state.item = payload;
};

const handleGetEventsCalendarSuccess = (state, { payload }) => {
  const { yearAndMonth, data } = payload;
  state.months[yearAndMonth] = data;
};

const handleGetEventReset = state => {
  state.item = undefined;
};
const handleResetSuccess = () => {
  return initialState;
};

export default createReducer(initialState, {
  [getEvent.success]: handleGetEventSuccess,
  [getEvent.reset]: handleGetEventReset,
  [getEventsCalendar.success]: handleGetEventsCalendarSuccess,
  [logout.success]: handleResetSuccess,
});
