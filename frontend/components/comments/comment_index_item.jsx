import React,  { useState} from 'react';
import { Link } from 'react-router-dom';


const CommentIndexItem = ({comment, updateComment, deleteComment, currentUser, commentUser}) => {
  
  const [editing, setEditing] = useState(false);
  const [body, setBody] = useState(comment.body);

  const handleUpdate = e => {
    e.preventDefault();
    updateComment({body, id: comment.id})
    setEditing(false);
  }
console.log(commentUser)
  return (
      <div className="comment">
        <div>
          <Link to={`/user/${commentUser.id}`}>
            {commentUser.first_name + " " + commentUser.last_name}
           </Link>
      <div className="comment-settings">
        {currentUser.id === comment.commenter_id ? 
        <>
          <button onClick={() => setEditing(true)}><i className="fa fa-edit"></i></button>
          <button onClick={() => deleteComment(comment.id)}> <i className="fa fa-trash"></i></button>
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
          <button onClick={handleUpdate}>Done</button>
      </form>
      :  <p>
        {comment.body}
      </p>}
    </div>
  )
}

export default CommentIndexItem



