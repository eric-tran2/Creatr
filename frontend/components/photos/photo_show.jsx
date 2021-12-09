import React from "react";
import { Link } from "react-router-dom";
import CommentFormContainer from "../comments/comment_form_container";
import CommentIndexItem from "../comments/comment_index_item";
import FavoriteShowContainer from "../favorites/favorite_form_container";
import TagFormContainer from "../tags/tag_form_container";
import TagIndexItem from "../tags/tag_index_item_container";

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.requestPhoto(this.props.match.params.photoId);
    this.props.allFavorites();
    this.props.allUsers().then(() => this.setState({ loading: false }));
    // console.log(this.props.comments)
  }

  componentWillUnmount() {
    this.props.clearComment();
    this.props.clearTag();
    // this.props.clearFavorite();
  }

  render() {
    if (!this.props.photo || this.state.loading) {
      return null;
    }
    const { photo } = this.props;

    let commentItems;
    if (this.props.comments) {
      commentItems = Object.values(this.props.comments).map((comment) => {
        {
          if (!comment) return null;
        }
        return (
          <CommentIndexItem
            currentUser={this.props.currentUser}
            commentUser={this.props.users[comment.commenter_id]}
            key={comment.id}
            comment={comment}
            updateComment={this.props.updateComment}
            deleteComment={this.props.deleteComment}
          />
        );
      });
    } else {
      commentItems = null;
    }

    let tagItems;
    if (this.props.tags) {
      tagItems = Object.values(this.props.tags).map((tag) => {
        {
          if (!tag) return null;
        }
        return (
          <TagIndexItem
            key={tag.id}
            tag={tag}
            deleteTag={this.props.deleteTag}
          />
        );
      });
    } else {
      tagItems = null;
    }
    // console.log(photo.id);
    return (
      <div className="imageShow">
        <div className="imageShowContent">
          <div className="modells">
            <img
              src={photo.picture_url}
              alt="img of something but now broke"
              className="showpagephoto"
              key={photo.id}
            />
            {this.props.currentUser.id === photo.author_id ? (
              <div className="editPhoto">
                <Link to={`/photos/${photo.id}/edit`}>
                  <i className="fa fa-edit fa-2x"></i>
                </Link>
                <button
                  className="photoDeleteButton"
                  onClick={() =>
                    this.props
                      .deletePhoto(photo.id)
                      .then(() => this.props.history.push(`/explore`))
                  }
                >
                  <i className="fa fa-trash fa-2x"></i>
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="commentsNfavorites">
          <div className="commentSection">
            <Link to={`/user/${photo.author_id}`} className="photo-owner">
              {this.props.users[photo.author_id].first_name +
                " " +
                this.props.users[photo.author_id].last_name}
            </Link>
            <div className="title-description">
              <div className="photo-title">{photo.title}</div>
              <div className="photo-description">{photo.description}</div>
            </div>
            <hr />
            {commentItems}
            <CommentFormContainer idOfPhoto={photo.id} />
          </div>
          <div className="favoritesNTags">
            <FavoriteShowContainer idOfPhoto={photo.id} />
            <hr />
            <div className="tagSection">
              {this.props.currentUser.id === photo.author_id ? (
                <>
                  <TagFormContainer idOfPhoto={photo.id} photo={photo} />
                  <hr />
                </>
              ) : (
                ""
              )}
              {tagItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Photo;
