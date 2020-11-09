import { createThunk } from '@rootstrap/redux-tools';

import eventService from 'services/eventService';

export const getEventsCalendar = createThunk('GET_EVENTS_CALENDAR', async yearAndMonth => {
  const {
    data: { events: data },
  } = await eventService.list(yearAndMonth);
  return { yearAndMonth, data };
});

export const getEvent = createThunk(
  'GET_EVENT',
  async id => (await eventService.get(id)).data.event,
);
