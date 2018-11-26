import { combineReducers } from 'redux';
import user from './user';
import receiver from './receiver';

export default combineReducers({
  user,
  receiver,
});