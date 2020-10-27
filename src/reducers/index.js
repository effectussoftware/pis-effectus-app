import { combineReducers } from 'redux';

import communication from 'reducers/communicationReducer';
import feed from 'reducers/feedReducer';
import oneOnOne from 'reducers/oneOnOneReducer';
import session from 'reducers/sessionReducer';
import { statusReducer } from '@rootstrap/redux-tools';

const AppReducer = combineReducers({
  communication,
  feed,
  oneOnOne,
  session,
  statusReducer,
});

export default AppReducer;
