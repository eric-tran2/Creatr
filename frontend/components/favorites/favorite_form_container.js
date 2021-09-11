import {connect} from 'react-redux';
import { createFavorite, requestFavorites, deleteFavorite } from '../../actions/favorite_actions';


const mapStateToProps = (state, ownProps) => ({
  favorite: {
    photo_id: ,
    favoriter_id:
  }
  
})

const mapDispatchToProps = dispatch => ({
  createFavorite: (favorite) => dispatch(createFavorite(favorite)),
  requestFavorite: (favorite) => dispatch(requestFavorite(favorite)),
  requestFavorites: (favorites) => dispatch(requestFavorites(favorites)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteForm)
