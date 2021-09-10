export const fetchFavorites = () => (
  $.ajax({
    method: 'GET',
    url: `/api/favorites`,
  })
);

export const fetchFavorite = favoriteId => (
  $.ajax({
    method: 'GET',
    url: `/api/favorites/${favoriteId}`
  })
);

export const postFavorite = favorite => (
  $.ajax({
    method: 'POST',
    url: `/api/user/favorites`,
    data: { favorite }
  })
)

export const destroyFavorite = favoriteId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/favorites/${favoriteId}`,
  })
)