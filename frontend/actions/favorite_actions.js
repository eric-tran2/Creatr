import * as FavoriteUtil from '../util/favorite_util'

export const RECEIVE_ALL_FAVORITES = 'RECEIVE_ALL_FAVORITES';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

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

export const requestFavorites = () => dispatch => {
  return FavoriteUtil.fetchFavorites().then(favorites => dispatch(receiveAllFavorites(favorites)))
}