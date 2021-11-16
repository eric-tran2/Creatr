import { RECEIVE_ALL_TAGS, RECEIVE_TAG, REMOVE_TAG } from "../actions/tag_actions";
import { RECEIVE_PHOTO } from "../actions/photo_actions";


const tagReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_ALL_TAGS:
      return action.tags;
    case RECEIVE_TAG:
      nextState[action.tag.id] = action.tag
      return nextState;
    case RECEIVE_PHOTO:
      if (action.photo.tags) {
        return action.photo.tags
      } else {
        return oldState
      }
    case REMOVE_TAG:
      delete nextState[action.tagId]
      return nextState;
    default:
      return oldState;
  }
}

export default tagReducer