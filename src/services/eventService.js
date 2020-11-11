import httpClient from 'httpClient';

class EventService {
  get(id) {
    return httpClient.get(`/events/${id}`);
  }

  list(date) {
    return httpClient.get('/events/', { params: { 'filters[date]': date } });
  }

  updateAssistance(id, params) {
    return httpClient.put(`/invitations/${id}`, params);
  }

  markAsSeen(id) {
    return httpClient.put(`/invitations/${id}/update_change_last_seen`);
  }
}

export default new EventService();
