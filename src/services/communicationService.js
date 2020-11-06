import httpClient from 'httpClient';

class CommunicationService {
  get(id) {
    return httpClient.get(`/communications/${id}`);
  }
}

export default new CommunicationService();
