import { fireEvent, waitFor } from '@testing-library/react-native';

import { LOGIN_SCREEN } from 'constants/screens';
import LoginScreen from 'screens/LoginScreen';

import {
  renderWithNavigation,
  mockedHttpClient,
  configureStore,
  AUTHENTICATED_RESPONSE_HEADERS,
  LOADING,
} from '../helpers';

describe('<LoginScreen />', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = configureStore();
    wrapper = renderWithNavigation(LoginScreen, store);
  });

  it('should render the login screen', () => {
    expect(wrapper.queryByTestId(LOGIN_SCREEN)).toBeTruthy();
  });

  describe('when the user submits the form', () => {
    describe('if the user exist', () => {
      it('should show no errors', async () => {
        mockedHttpClient(store)
          .onPost('/auth/login')
          .reply(
            200,
            {
              id: 482,
              email: 'example@rootstrap.com',
            },
            AUTHENTICATED_RESPONSE_HEADERS,
          );
        fireEvent.press(wrapper.queryByTestId('login-submit-button'));

        expect(wrapper.queryAllByLabelText('form-error')).toEqual([]);
        await waitFor(() => expect(wrapper.queryByText(LOADING)).toBeNull());
      });
    });
  });
});
