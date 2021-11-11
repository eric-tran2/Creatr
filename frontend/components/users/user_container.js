import { connect } from 'react-redux';
import user_show from './user_show';
import { requestAllPhotos } from '../../actions/photo_actions';

const mstp = (state, props) => {
  console.log(props.match.params.userId);
  return ({
    user: parseInt(props.match.params.userId),
    photos: Object.values(state.entities.photos),
  })
}

const mdtp = dispatch => {
  return ({
    allPhotos: () => dispatch(requestAllPhotos()),
  })
}

export default connect(mstp, mdtp)(user_show);