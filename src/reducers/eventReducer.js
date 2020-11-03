import moment from 'moment';

import { createReducer } from '@rootstrap/redux-tools';
import { getEventsCalendar } from 'actions/eventActions';
import { logout } from 'actions/userActions';
import { EVENT_CALENDAR_YEAR_AND_MONTH } from 'constants/dateFormats';

const initialState = {
  months: {},
};

const generateEmptyMonth = date => {
  const yearAndMonth = moment(date).format(EVENT_CALENDAR_YEAR_AND_MONTH);
  const days = moment(yearAndMonth, EVENT_CALENDAR_YEAR_AND_MONTH).daysInMonth();
  console.log(days);
  const emptyMonth = {};
  for (let i = 1; i <= days; i += 1) {
    emptyMonth[`${yearAndMonth}-${`${i < 10 ? '0' : ''}${i}`}`] = [];
  }
  return { emptyMonth, yearAndMonth };
};

const handleGetCommunicationSuccess = (state, { payload }) => {
  const { date, data } = payload;
  console.log(payload);
  const { emptyMonth, yearAndMonth } = generateEmptyMonth(date);
  state.months[yearAndMonth] = { ...emptyMonth, ...data };
};

const handleResetSuccess = () => {
  return initialState;
};

export default createReducer(initialState, {
  [getEventsCalendar.success]: handleGetCommunicationSuccess,
  [logout.success]: handleResetSuccess,
});
