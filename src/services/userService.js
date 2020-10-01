import httpClient from 'httpClient';

class UserService {
  login(token) {
    return httpClient.post('/auth/login', token);
  }

  logout() {
    return httpClient.delete('/auth/sign_out');
  }

  signUp(user) {
    return httpClient.post('/users', user);
  }
}

export default new UserService();
