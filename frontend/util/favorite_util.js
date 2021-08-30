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

export const postCFavorite = Favorite => (
  $.ajax({
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