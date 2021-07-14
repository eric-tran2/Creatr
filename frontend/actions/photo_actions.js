import * as PhotoUtil from '../util/photo_util';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';

export const receiveAllPhotos = photos => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const requestAllPhotos = () => dispatch => {
  // debugger
  return PhotoUtil.requestAllPhotos().then(photos => dispatch(receiveAllPhotos(photos)))
};

export const requestPhoto = (photoId) => dispatch => {
  return PhotoUtil.requestPhoto(photoId).then(photo => dispatch(receivePhoto(photo)))
};