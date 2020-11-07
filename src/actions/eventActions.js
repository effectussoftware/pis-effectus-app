import { createThunk } from '@rootstrap/redux-tools';

import eventService from 'services/eventService';

export const getEvent = createThunk(
  'GET_EVENT',
  async id => (await eventService.get(id)).data.event,
);
