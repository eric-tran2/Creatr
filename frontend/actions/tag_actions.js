import * as TagUtil from '../util/tag_util'


export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';

export const receiveAllTags = tags => ({
  type: RECEIVE_ALL_TAGS,
  tags
})

export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
})

export const removeTag = tagId => ({
  type: REMOVE_TAG,
  tagId
})


export const requestTags = () => dispatch => {
  return TagUtil.fetchTags().then(tags => dispatch(receiveAllTags(tags)))
}

export const requestTag = tagId => dispatch => {
  return TagUtil.fetchTag(tagId).then(tag => dispatch(receiveComment(tag)))
}

export const createTag = tag => dispatch => {
  return TagUtil.postTag(tag).then(tag => dispatch(receiveTag(tag)))
}


export const deleteTag = tagId => dispatch => {
  return TagUtil.destroyTag(tagId).then(({ tagId }) => dispatch(removeTag(tagId)))
}