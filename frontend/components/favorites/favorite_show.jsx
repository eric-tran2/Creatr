import React from 'react';

class FavoriteShow extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      favorites: this.props.favorites
    }
    this.toggleFave = this.toggleFave.bind(this);
  }

  toggleFave() {
    const data = { photo_id: this.props.photo_id, favoriter_id: this.props.favoriter_id }
    if (this.props.favorites) {
      this.props.deleteFavorite(data);
    } else {
      this.props.createFavorite(data);
    }
  }

  handleFavorites() {

  }

  render() {
    return (
      <button onClick={this.toggleFave} > Like </button>
    )
  }
}
// className = { liked? "like-button liked": "like-button" } > <i className={liked ? "fas fa-thumbs-up" : "far fa-thumbs-up"}



export default FavoriteShow 