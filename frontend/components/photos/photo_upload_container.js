import { connect } from 'react-redux';
import PhotoUpload from './photo_upload';
import { requestAllPhotos, requestPhoto } from '../../actions/photo_actions';
import { requestFavorites } from '../../actions/favorite_actions';

const mapStateToProps = (state, ownProps) => ({
  photos: state.entities.photos,
  photoId: ownProps.match.params.photoId,
  currentUserId: state.session.id

})

const mapDispatchToProps = dispatch => ({
  allPhotos: () => dispatch(requestAllPhotos()),
  allFavorites: () => dispatch(requestFavorites()),
  requestPhoto: (photoId) => dispatch(requestPhoto(photoId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoUpload)

