import React from 'react';


const CommentIndexItem = props => {
  console.log(props)
  return (
    <div>
      <div>
        {props.comment.body}
      </div>
    </div>
  )
}

export default CommentIndexItem