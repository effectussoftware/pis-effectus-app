import { PROFILE_SCREEN } from 'constants/screens';
import ProfileScreen from 'screens/ProfileScreen';

import { renderWithNavigation, configureAuthenticatedStore } from '../helpers';

describe('<ProfileScreen />', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = configureAuthenticatedStore();
    wrapper = renderWithNavigation(ProfileScreen, store);
  });

  it('should render the main screen', () => {
    expect(wrapper.queryByTestId(PROFILE_SCREEN)).toBeTruthy();
  });

  it('should render the logout', () => {
    expect(wrapper.queryByTestId('logout-button')).toBeTruthy();
  });
});
