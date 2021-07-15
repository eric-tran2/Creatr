export const fetchComments = () => (
  $.ajax({
    method: 'GET',
    url: `/api/comments`,
  })
);

export const fetchComment = commentId => (
  $.ajax({
    method: 'GET',
    url: `/api/comments/${commentId}`
  })
)

export const postComment = comment => (
  $.ajax({
    method: 'POST',
    url: `/api/user/comments`,
    data: { comment }
  })
)

export const updateComment = comment => (
  $.ajax({
    method: 'PATCH',
    url: `/api/comments/${comment.id}`,
    data: { comment }
  })
)

export const destroyComment = commentId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/comments/${commentId}`
  })
)