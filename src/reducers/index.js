import { combineReducers } from 'redux';

import communication from 'reducers/communicationReducer';
import session from 'reducers/sessionReducer';
import feed from 'reducers/feedReducer';
import { statusReducer } from '@rootstrap/redux-tools';

const AppReducer = combineReducers({
  communication,
  feed,
  session,
  statusReducer,
});

export default AppReducer;
