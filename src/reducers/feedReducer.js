import { createReducer } from '@rootstrap/redux-tools';
import { getFeed, getPriorityFeed } from 'actions/feedActions';
import { logout } from 'actions/userActions';
import { isEmpty } from 'lodash';

const initialState = {
  data: [],
  priorityData: [],
  endReached: false,
};

const handleGetFeedSuccess = (state, { payload }) => {
  const { data, shouldReplace } = payload;

  if (shouldReplace) {
    // On first load or pull to refresh
    state.endReached = false;
    state.data = data;
  } else if (isEmpty(data)) {
    // If page is empty then set endReached so no unnecessary calls are made.
    state.endReached = true;
  } else {
    // Appends the new page to the existing feed
    state.data = state.data.concat(data);
  }
};

const handleGetPriorityFeedSuccess = (state, { payload }) => {
  state.priorityData = payload;
};

const handleLogoutSuccess = () => {
  return initialState;
};

export default createReducer(initialState, {
  [getFeed.success]: handleGetFeedSuccess,
  [getPriorityFeed.success]: handleGetPriorityFeedSuccess,
  // Clean reducer on logout
  [logout.success]: handleLogoutSuccess,
});
