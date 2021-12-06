import React from 'react';
import { AiFillStar, AiOutlineStar} from 'react-icons/ai';


class FavoriteShow extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      favorites: this.props.favorites,
      favoriter_id: this.props.favoriterId,
      photo_id: this.props.photoId,
    }
    this.toggleFave = this.toggleFave.bind(this);
  }


  toggleFave() {
    const data = { photo_id: this.props.photo_id, favoriter_id: this.props.favoriter_id }
    if (this.props.favoriteId) {
      this.props.deleteFavorite(this.props.favoriteId);
    } else {
      this.props.createFavorite(data);
    }
  }


  render() {
    let like = this.props.favoriteId ? 
    // <i className="fa fa-star">Unlike</i> 
    <p target='_blank' rel="noopener noreferrer" className="favorites-button"><AiFillStar /></p>
                                  : 
    <p target='_blank' rel="noopener noreferrer" className="favorites-button"><AiOutlineStar /></p>
    return (
      <div className="favoriteSection"> 
        <button className="favorite-button-background" onClick={this.toggleFave} > {like} </button>
        <p className="fave-count">{this.props.allFavoriteCount + (this.props.allFavoriteCount === 1 ? " fave" : " faves")}</p>
      </div>
    )
  }
}
// className = { liked? "like-button liked": "like-button" } > <i className={liked ? "fas fa-thumbs-up" : "far fa-thumbs-up"}



export default FavoriteShow 