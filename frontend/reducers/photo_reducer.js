import { RECEIVE_ALL_PHOTOS } from "../actions/photo_actions";

//reducer is the filter
const photoReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let nextState = Object.assign({},oldState)

  switch (action.type) { // action = line 5-8 in photo_actions
    case RECEIVE_ALL_PHOTOS:
      return action.photos // returns line 7 in photo_actions
    default:
      return oldState;
  }
}


export default photoReducer