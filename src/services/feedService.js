import httpClient from 'httpClient';

class FeedService {
  get(params) {
    return httpClient.get('/feed', { params });
  }
}

export default new FeedService();
