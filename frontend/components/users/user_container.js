import { connect } from 'react-redux';
import user_show from './user_show';
import { requestAllPhotos } from '../../actions/photo_actions';
import { requestUsers } from '../../actions/user_actions';



const mstp = (state, props) => {
  return ({
    user: parseInt(props.match.params.userId),
    photos: Object.values(state.entities.photos),
    users: state.entities.users

  })
}

const mdtp = dispatch => {
  return ({
    allPhotos: () => dispatch(requestAllPhotos()),
    allUsers: () => dispatch(requestUsers())
  })
}

export default connect(mstp, mdtp)(user_show);