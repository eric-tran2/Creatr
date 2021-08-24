export const fetchFavorites = () => (
  $.ajax({
    method: 'GET',
    url: `/api/favorites`,
  })
);