import React from 'react'
import { Link } from 'react-router-dom'
import CommentFormContainer from '../comments/comment_form_container'
import CommentIndexItem from '../comments/comment_index_item'


class Photo extends React.Component{
  componentDidMount(){
    // debugger
    this.props.requestPhoto(this.props.match.params.photoId)
  }

  render(){
    if (!this.props.photo) {
      return null
    }
    const { photo } = this.props;
    console.log(this.props)
    // const { comments } = this.props.photo;
    let commentItems
    if (this.props.comments){
      commentItems = Object.values(this.props.comments).map(comment => {
          {if(!comment) return null;}
          return(
          <CommentIndexItem key={comment.id} comment={comment}   />
          )}
      )
    } else {
      commentItems = null;
    }
    return(
      <div className="imageShow">
        <div className="imageShowContent">
          <div className='modells'></div>
          <img src={photo.picture_url} alt="img of something but now broke" className='showpagephoto' key={photo.id}/>
        </div>
        <div className="commentSection">
          <CommentFormContainer idOfPhoto={photo.id}/>
          {commentItems}
        </div>
      </div>
      
    )
  }
}


export default Photo;