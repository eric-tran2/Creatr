import { connect } from 'react-redux'
import { requestFavorites, clearFavorite } from '../../actions/favorite_actions';
import { requestPhoto } from '../../actions/photo_actions'
import Photo from './photo_show'
import { deleteComment, updateComment, clearComment } from '../../actions/comment_actions';
import { deleteTag, clearTag } from '../../actions/tag_actions';
import { deletePhoto, updatePhoto } from '../../actions/photo_actions';
import { requestUsers } from '../../actions/user_actions';



const mapStateToProps = (state, props) => {
  return {
  photo: state.entities.photos[props.match.params.photoId],
  comments: state.entities.comments,
  tags: state.entities.tags,
  currentUser: state.entities.users[state.session.id],
  users: state.entities.users
  // commentUser: 
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
  deletePhoto: (photoId) => dispatch(deletePhoto(photoId)),
  updatePhoto: (photo) => dispatch(updatePhoto(photo)),
  allUsers: () => dispatch(requestUsers()),
  clearComment: () => dispatch(clearComment()),
  clearTag: () => dispatch(clearTag()),
  clearFavorite: () => dispatch(clearFavorite())
})

export default connect(mapStateToProps, mapDispatchToProps)(Photo)