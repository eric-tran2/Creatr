import {connect} from 'react-redux';
import { createFavorite, requestFavorites, deleteFavorite } from '../../actions/favorite_actions';
import FavoriteShow from './favorite_show'; 

const mapStateToProps = (state, ownProps) => ({
  favorite: {
    // photo_id: parseInt(ownProps.idOfPhoto),
    photo_id: state.entities.photos.id,
    favoriter_id: state.session.id,
    favorites: state.session.favorites
  }
  
})

const mapDispatchToProps = dispatch => ({
  requestFavorites: (favorites) => dispatch(requestFavorites(favorites)),
  createFavorite: (favorite) => dispatch(createFavorite(favorite)),
  deleteFavorite: (favoriteId) => dispatch(deleteFavorite(favoriteId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteShow)
