import { RECEIVE_ALL_FAVORITES, RECEIVE_FAVORITE, REMOVE_FAVORITE } from "../actions/favorite_actions";


const favoriteReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let nextState = Object.assign({}, oldState);
}