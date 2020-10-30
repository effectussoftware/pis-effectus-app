import { combineReducers } from 'redux';

import communication from 'reducers/communicationReducer';
import oneOnOne from 'reducers/oneOnOneReducer';
import session from 'reducers/sessionReducer';
import feed from 'reducers/feedReducer';
import { statusReducer } from '@rootstrap/redux-tools';

const AppReducer = combineReducers({
  communication,
  oneOnOne,
  feed,
  session,
  statusReducer,
});

export default AppReducer;
