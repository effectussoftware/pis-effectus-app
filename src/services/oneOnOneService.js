import httpClient from 'httpClient';

class OneOnOneService {
  get(id) {
    return httpClient.get(`/reviews/${id}`);
  }

  list() {
    return httpClient.get('/reviews');
  }
}

export default new OneOnOneService();
