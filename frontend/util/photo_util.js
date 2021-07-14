export const requestAllPhotos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/photos',
  })
);

export const requestPhoto = photoId => {
  return $.ajax({
    method: 'GET',
    url: `/api/photos/${photoId}`
  })
};

export const postPhoto = photo => (
  $.ajax({
    method: 'POST',
    url: '/api/photos',
    data: {photo}
  })
)

export const updatePhoto = photo => (
  $.ajax({
    method: 'PATCH',
    url: `/api/photos/${photo.id}`,
    data: {photo}
  })
)

export const destroyPhoto = photoId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/photos/${photoId}`,
  })
)
