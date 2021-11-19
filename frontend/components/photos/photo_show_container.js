import { connect } from 'react-redux'
import { requestFavorites } from '../../actions/favorite_actions';
import { requestPhoto } from '../../actions/photo_actions'
import Photo from './photo_show'
import { deleteComment, updateComment } from '../../actions/comment_actions';
import { deleteTag } from '../../actions/tag_actions';
import { deletePhoto } from '../../actions/photo_actions';


const mapStateToProps = (state, props) => {
  return {
  photo: state.entities.photos[props.match.params.photoId],
  comments: state.entities.comments,
  tags: state.entities.tags,
  currentUser: state.entities.users[state.session.id],
  // photoUser: state.entities.users[state.photos.author_id]
}};
//setup

// then send off
const mapDispatchToProps = dispatch => ({
  requestPhoto: (photoId) => dispatch(requestPhoto(photoId)),
  allFavorites: () => dispatch(requestFavorites()),
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  deleteTag: (tagId) => dispatch(deleteTag(tagId)),
  deletePhoto: (photoId) => dispatch(deletePhoto(photoId))
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Photo)