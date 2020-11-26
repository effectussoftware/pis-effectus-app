import humps from 'humps';
import { updateSession, logout } from 'actions/userActions';

const ACCESS_TOKEN = 'access-token';
const UID = 'uid';
const CLIENT = 'client';

const UNAUTHORIZED = 401;

export default (store, client) => {
  /**
   * Request Interceptor
   *
   * config: { data, headers } with data being the body of the request
   * and headers being the headers that are already set (static ones)
   *
   * Needs to set the dynamic headers that come from the saved session.
   * Needs to decamelize de data before sending it so the backend receives it
   * in the format it expects
   *
   * @return modified config
   */
  client.interceptors.request.use(config => {
    const { info } = store.getState().session;
    const { data, headers } = config;
    if (info) {
      const { token, client, uid } = info;
      config.headers = {
        ...headers,
        [ACCESS_TOKEN]: token,
        client,
        uid,
      };
    }
    config.data = humps.decamelizeKeys(data);
    return config;
  });

  /**
   * Response Interceptor
   *
   * response: { data, headers } with data being the body of the response
   * and headers being the headers comming from the backend
   *
   * Needs to gather the session info from the new headers and save it.
   * Needs to camelize de data before returning it so the app can use all camelCase.
   * Needs to kick the user out if the response was unautherized.
   * Needs to reject the promise if there was an error returned by the backend.
   *
   * @return modified config
   */
  client.interceptors.response.use(
    async response => {
      const { headers, data } = response;
      const token = headers[ACCESS_TOKEN];
      if (token) {
        const session = {
          token,
          uid: headers[UID],
          client: headers[CLIENT],
        };
        store.dispatch(updateSession(session));
      }
      response.data = humps.camelizeKeys(data);
      return response;
    },
    error => {
      if (error.response && error.response.status === UNAUTHORIZED) {
        store.dispatch(logout());
      }

      return Promise.reject(error);
    },
  );
};
