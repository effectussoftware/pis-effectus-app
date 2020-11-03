import httpClient from 'httpClient';

class EventService {
  list(date) {
    return httpClient.get(`/events_calendar/${date}`);
  }
}

export default new EventService();
