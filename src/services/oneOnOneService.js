import httpClient from 'httpClient';

class OneOnOneService {
  list() {
    return httpClient.get('/reviews');
  }
}

export default new OneOnOneService();
