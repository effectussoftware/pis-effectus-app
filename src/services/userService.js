import httpClient from 'httpClient';

class UserService {
  login(token) {
    return httpClient.post('/auth/login', token);
  }

  logout() {
    return httpClient.delete('/users/sign_out', { data: {} });
  }

  signUp(user) {
    return httpClient.post('/users', user);
  }
}

export default new UserService();
