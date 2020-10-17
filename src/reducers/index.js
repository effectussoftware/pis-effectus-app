import { combineReducers } from 'redux';
import session from 'reducers/sessionReducer';
import feed from 'reducers/feedReducer';
import { statusReducer } from '@rootstrap/redux-tools';

const AppReducer = combineReducers({
  feed,
  session,
  statusReducer,
});

export default AppReducer;
