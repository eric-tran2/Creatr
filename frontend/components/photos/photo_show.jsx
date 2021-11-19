import React from 'react'
import { Link } from 'react-router-dom'
import CommentFormContainer from '../comments/comment_form_container'
import CommentIndexItem from '../comments/comment_index_item'
import FavoriteShowContainer from '../favorites/favorite_form_container'
import TagFormContainer from '../tags/tag_form_container'
import TagIndexItem from '../tags/tag_index_item_container'

class Photo extends React.Component{
  componentDidMount(){
    // debugger
    this.props.requestPhoto(this.props.match.params.photoId)
    this.props.allFavorites()
  }

  // photoDelete() {
  //   return (
  //     <div>
  //       <button onClick={() => this.handleSubmit.bind(this)}> Hello
  //         <i className="fa fa-trash"></i>
  //       </button>
  //     </div>
  //   ) 
    
  // }

  // handleSubmit(e) {
  //   e.preventDefault;
  //   this.props.deletePhoto(this.props.photo.id).then(() => this.props.history.push(`/explore`));
  // }
  

  render(){
    if (!this.props.photo) {
      return null
    }
    const { photo } = this.props;
    // const { comments } = this.props.photo;
    let commentItems
    if (this.props.comments){
      commentItems = Object.values(this.props.comments).map(comment => {
          {if(!comment) return null;}
          return(
          <CommentIndexItem currentUser={this.props.currentUser} key={comment.id} comment={comment} updateComment={this.props.updateComment} deleteComment={this.props.deleteComment}  />
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
          <div>
            {photo.title}
          </div>
          <div>
            {photo.description}
          </div>
          <img src={photo.picture_url} alt="img of something but now broke" className='showpagephoto' key={photo.id}/>
        </div>
        {
        this.props.currentUser.id === photo.author_id 
        ? 
        < button onClick={() => this.props.deletePhoto(photo.id)
        .then(() => this.props.history.push(`/explore`))}>
          <i className="fa fa-trash"></i>
          </button > 
          : ""}
        <div className="commentsNfavorites">
            </div>
            <div className="commentSection">
              <CommentFormContainer idOfPhoto={photo.id}/>
              {commentItems}
            </div> 
            <div className="tagSection">
            <TagFormContainer idOfPhoto={photo.id} />
            {tagItems}
            <div className="favoriteSection">
              <FavoriteShowContainer idOfPhoto={photo.id}/>
            </div>
        </div>
      </div>
      
    )
  }
}


export default Photo;