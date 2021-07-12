export const requestAllPhotos = () => (
  $.ajax({
    url: '/api/photos',
  })
);
