import React from 'react';

class FavoriteShow extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      favorites: this.props.favorites,

    }
  }

  render() {
    return (
      <div> return hello</div>
    )
  }
}



export default FavoriteShow 