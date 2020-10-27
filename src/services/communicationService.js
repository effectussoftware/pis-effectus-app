import httpClient from 'httpClient';

class FeedService {
  get(id) {
    return httpClient.get(`/communications/${id}`);
  }
}

export default new FeedService();
