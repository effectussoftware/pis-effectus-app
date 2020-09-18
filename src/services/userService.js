import httpClient from 'httpClient';

class UserService {
  login(user) {
    return httpClient.post('/users/sign_in', user);
  }

  logout() {
    return httpClient.delete('/users/sign_out', { data: {} });
  }

  signUp(user) {
    return httpClient.post('/users', user);
  }

  registerDevice(token) {
    return httpClient.post('/devices', { device: { token } });
  }
}

export default new UserService();
