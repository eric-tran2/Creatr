import React from 'react'
import { Link } from 'react-router-dom'
import CommentFormContainer from '../comments/comment_form_container'
import CommentIndexItem from '../comments/comment_index_item'
import FavoriteShowContainer from '../favorites/favorite_form_container'
import TagIndexItem from '../tags/tag_index_item'
import TagFormContainer from '../tags/tag_form_container'


class Photo extends React.Component{
  componentDidMount(){
    // debugger
    this.props.requestPhoto(this.props.match.params.photoId)
    this.props.allFavorites()
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
          <CommentIndexItem key={comment.id} comment={comment} updateComment={this.props.updateComment} deleteComment={this.props.deleteComment}  />
          )}
      )
    } else {
      commentItems = null;
    }

    let tagItems
    if (this.props.tags) {
      tagItems = Object.values(this.props.tags).map(tag => {
        { if (!tag) return null; }
        return (
          <TagIndexItem key={tag.id} tag={tag}  deleteTag={this.props.deleteTag} />
        )
      }
      )
    } else {
      tagItems = null;
    }

    return(
      <div className="imageShow">
        <div className="imageShowContent">
          <div className='modells'></div>
          <img src={photo.picture_url} alt="img of something but now broke" className='showpagephoto' key={photo.id}/>
        </div>
        <div className="commentsNfavorites">
            <div className="tagSection">
            <TagFormContainer idOfPhoto={photo.id} />
            {tagItems}
            </div>
            <div className="commentSection">
              <CommentFormContainer idOfPhoto={photo.id}/>
              {commentItems}
            </div> 
            <div className="favoriteSection">
              <FavoriteShowContainer idOfPhoto={photo.id}/>
            </div>
        </div>
      </div>
      
    )
  }
}


export default Photo;