import React from 'react'
import { Link } from 'react-router-dom'


class Photo extends React.Component{
  componentDidMount(){
    // debugger
    this.props.requestPhoto(this.props.match.params.photoId)
  }

  render(){
    const photo = this.props.photo;
    console.log(photo)
    if (!photo) {
      return null
    }
    return(
      <>
        hi
        <img src={photo.picture_url} alt="img of something but now broke" className='photoIsBroken' key={photo.id}/>
      </>
    )
  }
}


export default Photo;