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
    <a target='_blank' rel="noopener noreferrer"><AiFillStar /></a>
                                  : 
    <a target='_blank' rel="noopener noreferrer"><AiOutlineStar /></a>
    return (
      <div className="favoriteSection"> 
        <button onClick={this.toggleFave} > {like} </button>
        <p>{this.props.allFavoriteCount + (this.props.allFavoriteCount === 1 ? " like" : " likes")}</p>
      </div>
    )
  }
}
// className = { liked? "like-button liked": "like-button" } > <i className={liked ? "fas fa-thumbs-up" : "far fa-thumbs-up"}



export default FavoriteShow 