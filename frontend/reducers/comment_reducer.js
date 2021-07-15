import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_PHOTO } from "../actions/photo_actions";

const commentReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_ALL_COMMENTS: 
      return action.comments;
    case RECEIVE_COMMENT:
      nextState[action.comment.id] = action.comment
      return nextState;
    case RECEIVE_PHOTO:
      return action.photo.comments 
    case REMOVE_COMMENT:
      delete nextState[action.commentId]
      return nextState;
    default:
      return oldState;
  }
}

export default commentReducer