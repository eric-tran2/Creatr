import { RECEIVE_ALL_FAVORITES, RECEIVE_FAVORITE, REMOVE_FAVORITE } from "../actions/favorite_actions";


const favoriteReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_ALL_FAVORITES:
      return action.favorites;
    case RECEIVE_FAVORITE:
      nextState[action.favorite.id] = action.favorite
      return nextState;
      
      break;
  
    default:
      break;
  }
}