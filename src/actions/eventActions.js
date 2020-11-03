import { createThunk } from '@rootstrap/redux-tools';

import eventService from 'services/eventService';

export const getEventsCalendar = createThunk('GET_EVENTS_CALENDAR', async date => {
  console.log('date: ', date);
  const { data } = await eventService.list(date);
  return { date, data };
});
