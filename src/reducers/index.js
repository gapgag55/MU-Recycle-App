import { combineReducers } from 'redux';
import user from './user';
// import transferReducer from './transfer';

export default combineReducers({
  user,
  // transfer: transferReducer
});