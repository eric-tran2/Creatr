import { combineReducers } from 'redux';

import users from './users_reducer';
import photos from './photo_reducer';
import comments from './comment_reducer'
import favorites from './favorite_reducer'

export default combineReducers({
  users,
  photos,
  comments,
  favorites,
});
