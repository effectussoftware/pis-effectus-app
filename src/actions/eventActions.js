import { createThunk } from '@rootstrap/redux-tools';

import eventService from 'services/eventService';

export const getEventsCalendar = createThunk('GET_EVENTS_CALENDAR', async yearAndMonth => {
  const {
    data: { events: data },
  } = await eventService.list(yearAndMonth);
  return { yearAndMonth, data };
});
