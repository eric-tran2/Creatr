import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO} from "../actions/photo_actions";

//reducer is the filter
const photoReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let nextState = Object.assign({}, oldState);

  switch (action.type) { // action = RECEIVE_ALL_PHOTOS in photo_actions
    case RECEIVE_ALL_PHOTOS:
      return action.photos // returns line 7 in photo_actions
    case RECEIVE_PHOTO:
      nextState[action.photo.photo.id] = action.photo.photo
      return nextState;
    case REMOVE_PHOTO:
      delete nextState[action.photoId]
      return nextState;
    default:
      return oldState;
  }
}


export default photoReducer