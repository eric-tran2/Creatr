import {connect} from 'react-redux';
import { createFavorite, requestFavorites, deleteFavorite } from '../../actions/favorite_actions';
import FavoriteShow from './favorite_show'; 

const mapStateToProps = (state, ownProps) => {
  let favoriteId;
  let allFavoriteCount = 0;

  if (state.entities.favorites){
    for (let i = 0; i < Object.values(state.entities.favorites).length; i++) {
      
        if (Object.values(state.entities.favorites)[i].photo_id === Object.values(state.entities.photos)[0].id && state.session.id === Object.values(state.entities.favorites)[i].favoriter_id) {
          favoriteId = Object.values(state.entities.favorites)[i].id
        }
        if (Object.values(state.entities.favorites)[i].photo_id === Object.values(state.entities.photos)[0].id) {
          allFavoriteCount++
        }
    }
  }
  return ({ 
    // favorite: {
      // photo_id: parseInt(ownProps.idOfPhoto),
      photo_id: Object.values(state.entities.photos)[0].id,
      favoriter_id: state.session.id,
      favoriteId,
      allFavoriteCount
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
