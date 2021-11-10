import {connect} from 'react-redux';
import { createFavorite, requestFavorites, deleteFavorite } from '../../actions/favorite_actions';
import FavoriteShow from './favorite_show'; 

const mapStateToProps = (state, ownProps) => {
  let favoriteId;

  if (state.entities.favorites){
    Object.values(state.entities.favorites).forEach(
      favorite => {
        if (favorite.photo_id === Object.values(state.entities.photos)[0].id && state.session.id) {
          favoriteId = favorite.id
        }
      }
    )
  }
  return ({ 
    // favorite: {
      // photo_id: parseInt(ownProps.idOfPhoto),
      photo_id: Object.values(state.entities.photos)[0].id,
      favoriter_id: state.session.id,
      favoriteId
      // favorites: state.session.favorites
    // }
    
  })
} 
  
const mapDispatchToProps = dispatch => ({
  // requestFavorites: () => dispatch(requestFavorites()),
  createFavorite: (favorite) => dispatch(createFavorite(favorite)),
  deleteFavorite: (favoriteId) => dispatch(deleteFavorite(favoriteId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteShow)
