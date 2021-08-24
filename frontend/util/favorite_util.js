export const fetchFavorites = () => (
  $.ajax({
    method: 'GET',
    url: `/api/favorites`,
  })
);

export const fetchFavorite = favoriteId => (
  $.ajax({
    method: 'GET',
    url: `/api/comments/${favoriteId}`
  })
);