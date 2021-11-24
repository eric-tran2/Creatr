import * as UserUtil from '../util/user_util'

export const RECEIVE_ALL_USERS = 'RECEIVER_ALL_USERS'
export const RECEIVE_USER = 'RECEIVE_USER'


export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
})

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

export const requestUsers = () => dispatch => {
  return UserUtil.fetchUsers().then(users => dispatch(receiveAllUsers(users)))
}

export const requestUser = userId => dispatch => {
  return UserUtil.fetchUser(userId).then(user => dispatch(receiveUser(user)))
}

