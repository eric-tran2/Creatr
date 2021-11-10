import { connect } from 'react-redux'
import { requestFavorites } from '../../actions/favorite_actions';
import { requestPhoto } from '../../actions/photo_actions'
import Photo from './photo_show'

const mapStateToProps = (state, props) => {
  return {
  photo: state.entities.photos[props.match.params.photoId],
  comments: state.entities.comments
  // comments: Object.values(state.entities.photos[props.match.params.photoId].comments),
  // photoId: props.match.params.photoId
}};
//setup

// then send off
const mapDispatchToProps = dispatch => ({
  requestPhoto: (photoId) => dispatch(requestPhoto(photoId)),
  allFavorites: () => dispatch(requestFavorites())
})

export default connect(mapStateToProps, mapDispatchToProps)(Photo)