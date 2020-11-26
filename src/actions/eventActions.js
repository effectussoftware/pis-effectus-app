import { createThunk } from '@rootstrap/redux-tools';

import eventService from 'services/eventService';

/**
 * getEventsCalendar
 *
 * @param {string} yearAndMonth: format 'YYYY-MM'
 *
 * @return thunk, statusActions to be called and querried on the reducers
 * The month's events can be saved on the reducer on getEventsCalendar.success which receives in
 * the key payload the following object: { yearAndMonth, data }
 */
export const getEventsCalendar = createThunk('GET_EVENTS_CALENDAR', async yearAndMonth => {
  const {
    data: { events: data },
  } = await eventService.list(yearAndMonth);
  return { yearAndMonth, data };
});

/**
 * getEvent
 *
 * @param {number} id: id of the event to be brough from the backend
 *
 * @return thunk, statusActions to be called and querried on the reducers
 * The event can be saved on the reducer on getEvent.success with the key payload
 */
export const getEvent = createThunk(
  'GET_EVENT',
  async id => (await eventService.get(id)).data.event,
);

/**
 * updateEventAssistance
 *
 * @param {number} id: id of the event to be updated
 * params: { confirmation: bool, attend: bool }
 *
 * @return thunk, statusActions to be called and querried on the reducers
 * No need to save the results, the event is refreshed on success
 */
export const updateEventAssistance = createThunk(
  'UPDATE_EVENT_ASSISTANCE',
  async (id, params) => (await eventService.updateAssistance(id, params)).data.invitation,
);

/**
 * markEventAsSeen
 *
 * @param {number} id: id of the event to be updated
 *
 * @return thunk, statusActions to be called and querried on the reducers
 * No need to save the results, it is intentional that the event is not refreshed
 * when this endpoint succeeds since the last seen disclaimer would dissapear instantly.
 */
export const markEventAsSeen = createThunk(
  'MARK_EVENT_AS_SEEN',
  async id => (await eventService.markAsSeen(id)).data.invitation,
);
