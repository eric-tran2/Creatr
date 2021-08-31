import * as FavoriteUtil from '../util/favorite_util'

export const RECEIVE_ALL_FAVORITES = 'RECEIVE_ALL_FAVORITES';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const REMOVE_FAVORITES = 'REMOVE_FAVORITE';

export const receiveAllFavorites = favorites => ({
  type: RECEIVE_ALL_FAVORITES,
  favorites
})

export const receiveFavorite = favorite => ({
  type: RECEIVE_FAVORITE,
  favorite
})