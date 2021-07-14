import { connect } from 'react-redux'
import { requestPhoto } from '../../actions/photo_actions'
import Photo from './photo_show'

const mapStateToProps = (state, props) => ({
  photo: state.entities.photos[props.match.params.photoId]
});

const mapDispatchToProps = dispatch => ({
  requestPhoto: (photoId) => dispatch(requestPhoto(photoId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Photo)