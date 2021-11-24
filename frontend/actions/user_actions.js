import * as UserUtil from '../util/user_util'

export const RECEIVE_USER = 'RECEIVE_USER'

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

export const requestUser = userId => dispatch => {
  return UserUtil.requestUser(userId).then(user => dispatch(receiveUser(user)))
}

