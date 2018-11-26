import { combineReducers } from 'redux';
import user from './user';
import receiver from './receiver';
import trashes from './trash';
import news from './news';
import bins from './bins';

export default combineReducers({
  user,
  receiver,
  trashes,
  news,
  bins
});