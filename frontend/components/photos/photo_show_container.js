import { connect } from 'react-redux'
import { requestFavorites } from '../../actions/favorite_actions';
import { requestPhoto } from '../../actions/photo_actions'
import Photo from './photo_show'
import { deleteComment, updateComment } from '../../actions/comment_actions';
import { deleteTag } from '../../actions/tag_actions';


const mapStateToProps = (state, props) => {
  return {
  photo: state.entities.photos[props.match.params.photoId],
  comments: state.entities.comments,
  tags: state.entities.tags
  // comments: Object.values(state.entities.photos[props.match.params.photoId].comments),
  // photoId: props.match.params.photoId
}};
//setup

// then send off
const mapDispatchToProps = dispatch => ({
  requestPhoto: (photoId) => dispatch(requestPhoto(photoId)),
  allFavorites: () => dispatch(requestFavorites()),
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  deleteTag: (tagId) => dispatch(deleteTag(tagId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Photo)