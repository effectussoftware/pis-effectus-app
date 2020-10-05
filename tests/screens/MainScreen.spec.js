import { MAIN_SCREEN } from 'constants/screens';
import MainScreen from 'screens/MainScreen';

import { renderWithNavigation, configureAuthenticatedStore } from '../helpers';

describe('<MainScreen />', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = configureAuthenticatedStore();
    wrapper = renderWithNavigation(MainScreen, store);
  });

  it('should render the main screen', () => {
    expect(wrapper.queryByTestId(MAIN_SCREEN)).toBeTruthy();
  });
  it('should render the welcome message in screen', () => {
    expect(wrapper.queryByText('No hay novedades')).toBeTruthy();
  });
});
