import { RECEIVE_ALL_FAVORITES, RECEIVE_FAVORITE, REMOVE_FAVORITE } from "../actions/favorite_actions";
import { RECEIVE_PHOTO } from "../actions/photo_actions";


const favoriteReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_ALL_FAVORITES:
      return action.favorites;
    case RECEIVE_FAVORITE:
      nextState[action.favorite.id] = action.favorite
      return nextState;
    case RECEIVE_PHOTO:
      if(action.photo.favorites){
        return action.photo.favorites
      } else {
        return oldState
      }
      
      break;
  
    default:
      return oldState;
  }
}

export default favoriteReducer