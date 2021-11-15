import React, {useState} from 'react';


const CommentIndexItem = ({comment, updateComment, deleteComment}) => {
  const [editing, setEditing] = useState(false);
  const [body, setBody] = useState(comment.body);

  const handleUpdate = e => {
    e.preventDefault();
    updateComment({body, id: comment.id})
    setEditing(false);
  }

  return (
    <div className="comment">
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
      :  <div>
        {comment.body}
      </div>}
      <div className="comment-settings">
        <button onClick={() => setEditing(true)}>
          <i className="fa fa-edit"></i>
        </button>
        <button onClick={() => deleteComment(comment.id)}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  )
}

export default CommentIndexItem



