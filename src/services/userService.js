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

  registerDevice(token) {
    return httpClient.post('/device_registrations', { device: { token } });
  }
}

export default new UserService();
