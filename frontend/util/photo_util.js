export const requestAllPhotos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/photos',
  })
);

export const requestPhoto = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/photos/${id}`
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

export const destroyPhoto = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/photos/{$id}`,
  })
)
