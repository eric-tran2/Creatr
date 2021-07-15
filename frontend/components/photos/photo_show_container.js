import { connect } from 'react-redux'
import { requestPhoto } from '../../actions/photo_actions'
import Photo from './photo_show'

const mapStateToProps = (state, props) => {
  // debugger
  return {
  photo: state.entities.photos[props.match.params.photoId],
  comments: state.entities.comments
  // comments: Object.values(state.entities.photos[props.match.params.photoId].comments),
  // photoId: props.match.params.photoId
}};
//setup

// then send off
const mapDispatchToProps = dispatch => ({
  requestPhoto: (photoId) => dispatch(requestPhoto(photoId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Photo)