import { createReducer } from '@rootstrap/redux-tools';
import { getFeed } from 'actions/feedActions';
import { logout } from 'actions/userActions';
import { isEmpty } from 'lodash';

const initialState = {
  data: [],
  endReached: false,
};

const handleGetFeedSuccess = (state, { payload }) => {
  const { data, shouldReplace } = payload;
  if (shouldReplace) {
    state.endReached = false;
    state.data = data;
  } else if (isEmpty(data)) {
    state.endReached = true;
  } else {
    state.data = state.data.concat(data);
  }
};

const handleLogoutSuccess = () => {
  return initialState;
};

export default createReducer(initialState, {
  [getFeed.success]: handleGetFeedSuccess,
  [logout.success]: handleLogoutSuccess,
});
