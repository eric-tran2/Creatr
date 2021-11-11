import React from 'react';


const CommentIndexItem = ({comment, updateComment, deleteComment}) => {
  return (
    <div className="comment">
      <div>
        {comment.body}
      </div>
      <div className="comment-settings">
        <button>Edit</button>
        <button onClick={() => deleteComment(comment.id)}>Delete</button>
      </div>
    </div>
  )
}

export default CommentIndexItem