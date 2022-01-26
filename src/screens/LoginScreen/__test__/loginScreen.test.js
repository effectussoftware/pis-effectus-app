import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import Config from 'react-native-config';
import { createStore } from 'redux';

import LoginScreen from 'screens/LoginScreen';
import { GoogleSignin } from 'tests/__mocks__/@react-native-google-signin/google-signin';
import isConnected from 'tests/__mocks__/@react-native-community/netinfo';
import es from 'locale/es';
import reducer from 'reducers';

const initialState = {};
const store = createStore(reducer, initialState);

beforeAll(
  () =>
    GoogleSignin.configure({
      webClientId: Config.GOOGLE_AUTH_CLIENT_ID_SERVER,
      forceCodeForRefreshToken: true,
      offlineAccess: true,
    }),
  isConnected.addEventListener(),
);

beforeEach(() => jest.useFakeTimers());

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

test('should render Login screen ', () => {
  render(
    <Provider store={store}>
      <LoginScreen />
    </Provider>,
  );
  act(() => jest.advanceTimersByTime(1500));
});

test('should click in GoogleSignIn button', () => {
  const { signinButton } = es.LOGIN_SCREEN;
  const { getByText } = render(
    <Provider store={store}>
      <LoginScreen />
    </Provider>,
  );

  act(() => jest.advanceTimersByTime(1500));

  const button = getByText(signinButton);

  fireEvent.press(button);
});
