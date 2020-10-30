import httpClient from 'httpClient';

class OneOnOneService {
  get(id) {
    return httpClient.get(`/reviews/${id}`);
  }
}

export default new OneOnOneService();
