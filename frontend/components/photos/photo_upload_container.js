import { connect } from 'react-redux';
import PhotoUpload from './photo_upload';
import { requestAllPhotos } from '../../actions/photo_actions';
import { requestFavorites } from '../../actions/favorite_actions';

const mapStateToProps = state => ({
  photos: Object.values(state.entities.photos)

})

const mapDispatchToProps = dispatch => ({
  allPhotos: () => dispatch(requestAllPhotos()),
  allFavorites: () => dispatch(requestFavorites())
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoUpload)

