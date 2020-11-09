import httpClient from 'httpClient';

class EventService {
  list(date) {
    return httpClient.get('/events/', { params: { 'filters[date]': date } });
  }
}

export default new EventService();
