import * as CommentUtil from '../util/comment_util'


export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveAllComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
})

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
})

export const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
})

//thunk functions
// ajax response is the promise
export const requestComments = () => dispatch => {
  return CommentUtil.fetchComments().then(comments => dispatch(receiveAllComments(comments)))
}

export const requestComment = commentId => dispatch => {
  return CommentUtil.fetchComment(commentId).then(comment => dispatch(receiveComment(comment)))
}

export const createComment = comment => dispatch => {
  return CommentUtil.postComment(comment).then(comment => dispatch(receiveComment(comment)))
}

export const updateComment = comment => dispatch => {
  return CommentUtil.updateComment(comment).then(updatedComment => dispatch(receiveComment(updatedComment)))
}

export const deleteComment = commentId => dispatch => {
  return CommentUtil.destroyComment(commentId).then(() => dispatch(removeComment(commentId)))
}