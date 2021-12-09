import * as FavoriteUtil from '../util/favorite_util'

export const RECEIVE_ALL_FAVORITES = 'RECEIVE_ALL_FAVORITES';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
// export const CLEAR_FAVORITE = 'CLEAR_FAVORITE';

export const receiveAllFavorites = favorites => ({
  type: RECEIVE_ALL_FAVORITES,
  favorites
})

export const receiveFavorite = favorite => ({
  type: RECEIVE_FAVORITE,
  favorite
})

export const removeFavorite = favoriteId => ({
  type: REMOVE_FAVORITE,
  favoriteId
})

// export const clearFavorite = () => ({
//   type: CLEAR_FAVORITE,
// })

export const requestFavorites = () => dispatch => {
  return FavoriteUtil.fetchFavorites().then(favorites => dispatch(receiveAllFavorites(favorites)))
}

export const createFavorite = favorite => dispatch => {
  return FavoriteUtil.postFavorite(favorite).then(favorite => dispatch(receiveFavorite(favorite)))
}

export const deleteFavorite = favoriteId => dispatch => {
  return FavoriteUtil.destroyFavorite(favoriteId).then(() => dispatch(removeFavorite(favoriteId)))
}