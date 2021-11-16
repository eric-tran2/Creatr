export const fetchTags = () => (
  $.ajax({
    method: 'GET',
    url: `/api/tags`,
  })
);

export const fetchTag = tagId => (
  $.ajax({
    method: 'GET',
    url: `/api/tags/${tagId}`
  })
)

export const postTag = tag => (
  $.ajax({
    method: 'POST',
    url: `/api/user/tags`,
    data: { tag }
  })
)

export const destroyTag = tagId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/tags/${tagId}`
  })
)