import * as PhotoUtil from '../util/photo_util';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';

export const receiveAllPhotos = photos => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
});

export const receivePhoto = photo => {
  return ({
  type: RECEIVE_PHOTO,
  photo
})};

export const removePhoto = photoId => ({
  type: REMOVE_PHOTO,
  photoId
})

export const requestAllPhotos = () => dispatch => {
  // debugger
  return PhotoUtil.requestAllPhotos().then(photos => dispatch(receiveAllPhotos(photos)))
};

export const requestPhoto = (photoId) => dispatch => {
  return PhotoUtil.requestPhoto(photoId).then(photo => dispatch(receivePhoto(photo)))
};

export const postPhoto = photo => dispatch => {
  return PhotoUtil.postPhoto(photo).then(photo => dispatch(receivePhoto(photo)))
}

export const updatePhoto = photo => dispatch => {
  return PhotoUtil.updatePhoto(photo).then(updatedPhoto => dispatch(receivePhoto(updatedPhoto)))
}

export const deletePhoto = photoId => dispatch => {
  return PhotoUtil.destroyPhoto(photoId).then(() => dispatch(removePhoto(photoId)))
}