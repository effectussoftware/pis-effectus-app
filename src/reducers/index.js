import { combineReducers } from 'redux';

import communication from 'reducers/communicationReducer';
import event from 'reducers/eventReducer';
import oneOnOne from 'reducers/oneOnOneReducer';
import session from 'reducers/sessionReducer';
import feed from 'reducers/feedReducer';
import { statusReducer } from '@rootstrap/redux-tools';

const AppReducer = combineReducers({
  communication,
  event,
  feed,
  oneOnOne,
  session,
  statusReducer,
});

export default AppReducer;
