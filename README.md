# Creatr 

[Creatr](https://creat-r.herokuapp.com/#/) is a fullstack clone of based off of [Flickr](https://www.flickr.com/). Flickr is a popular photo storage website where users get to share their photos with the rest of the world. Creatr is a fullstack application that uses ruby on rails as a backend and react as a frontend.

![splash_page](https://creatr-seed.s3.amazonaws.com/splash_page.gif)

# Technologies
 * Frontend: Javascript React/Redux, HTML, SCSS
 * Backend API: Ruby on Rails
 * Cloud Storage: Amazon Web Services
 * Database: PostgreSQL
 * Hosting: Heroku
 

# Features
### User Authentication
* Users can sign up, log in, and log out of Creatr
* Guest login button for convenience
* Users are required to be logged on to use certain features

![user_auth](https://creatr-seed.s3.amazonaws.com/user_auth.gif)

### After user authentication
* Users are allowed to upload photo, update photos, delete photos
* Users are allowed to favorite, comment, and add tags to photos
### Photos
![explore_page](https://creatr-seed.s3.amazonaws.com/photos_readme.gif)
* Logged on users will have full access to website features such as:
  * Uploading pictures (CRUD)
  * Commenting on pictures (CRUD)
  * Adding and/or removing tags to your photo 
  * Favoriting/unfavoriting pictures
### Comments
![comments](https://creatr-seed.s3.amazonaws.com/comment_readme.gif)

* Logged on users will be allowed to comment on their own photo
* Users will be able to edit or delete their comments
```javascript
const CommentIndexItem = ({comment, updateComment, deleteComment, currentUser, commentUser}) => {
  
  const [editing, setEditing] = useState(false);
  const [body, setBody] = useState(comment.body);

  const handleUpdate = e => {
    e.preventDefault();
    updateComment({body, id: comment.id})
    setEditing(false);
  }

  return (
      <div className="comment">
        <div>
          <Link className="commenter-name" to={`/user/${commentUser.id}`}>
            {commentUser.first_name + " " + commentUser.last_name}
           </Link>
      <div className="comment-settings">
        {currentUser.id === comment.commenter_id ? 
        <>
          <button className="comment-crud-buttons" onClick={() => setEditing(true)}><i className="fa fa-edit fa-1x"></i></button>
          <button className="comment-crud-buttons" onClick={() => deleteComment(comment.id)}> <i className="fa fa-trash fa-1x"></i></button>
        </>
        : 
        ""}
      </div>
    </div>
      {editing ? 
      <form>
          <textarea type='text'
            cols="50"
            rows="2"
            value={body}
            onChange={e => setBody(e.target.value)}
          />
          <button className="edit-comment-done" onClick={handleUpdate}>Comment</button>
      </form>
      :  <p className="comment-body">
        {comment.body}
      </p>}
    </div>
  )
}
```

### Tags
* Owners of photos will be allowed to add and delete tags onto their own photos
* Other users will be able to view tags but not allowed to edit or delete tags
### Favorites
* Every user is allowed to favorite and unfavorite any photo
* Photo has a favorite count based on the amount of people who favorited the photo

