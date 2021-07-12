import * as PhotoUtil from '../util/photo_util'

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS'

export const receiveAllPhotos = photos => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
})

export const requestAllPhotos = () => dispatch => {
  return PhotoUtil.requestAllPhotos().then(photos => dispatch(receiveAllPhotos(photos)))
}