import httpClient from 'httpClient';

class EventService {
  get(id) {
    return httpClient.get(`/events/${id}`);
  }

  list(date) {
    return httpClient.get('/events/', { params: { 'filters[date]': date } });
  }
}

export default new EventService();
