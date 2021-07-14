export const fetchComments = photoId => (
  $.ajax({
    method: 'GET',
    url: `/api/comments`
  })
);

export const fetchComment = id => (
  $.ajax({
    method: 'GET',
    url: `/api/comments/${id}`
  })
)

export const postComment = comment => (
  $.ajax({
    method: 'POST',
    url: `/api/comments`,
    data: {comment}
  })
)

export const updateComment = comment => (
  $.ajax({
    method: 'PATCH',
    url: `/api/comments/${comment.id}`,
    data: { comment }
  })
)

export const destroyComment = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/comments/${id}`
  })
)
