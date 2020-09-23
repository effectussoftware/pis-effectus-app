import httpClient from 'httpClient';

class UserService {
  login(idToken) {
    return httpClient.post('/auth/login', idToken);
  }

  logout() {
    return httpClient.delete('/users/sign_out', { data: {} });
  }

  signUp(user) {
    return httpClient.post('/users', user);
  }
}

export default new UserService();
