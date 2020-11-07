import httpClient from 'httpClient';

class EventService {
  get(id) {
    return httpClient.get(`/events/${id}`);
  }
}

export default new EventService();
