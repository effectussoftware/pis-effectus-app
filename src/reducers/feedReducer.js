import { createReducer } from '@rootstrap/redux-tools';
import { getFeed } from 'actions/feedActions';
import { logout } from 'actions/userActions';

const initialState = {
  data: [],
};

const handleGetFeedSuccess = (state, { payload }) => {
  const { data, shouldReplace } = payload;
  if (shouldReplace) {
    state.data = data;
  } else {
    state.data = [...state.data, ...data];
  }
};

const handleLogoutSuccess = () => {
  return initialState;
};

export default createReducer(initialState, {
  [getFeed.success]: handleGetFeedSuccess,
  [logout.success]: handleLogoutSuccess,
});
