import httpClient from 'httpClient';

class FeedService {
  get(params) {
    return httpClient.get('/feed', { params });
  }

  getWithPriority() {
    return httpClient.get('/priority_feed');
  }
}

export default new FeedService();
