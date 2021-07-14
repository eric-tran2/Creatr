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
