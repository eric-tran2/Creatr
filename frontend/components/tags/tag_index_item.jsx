import React, { useState } from 'react';


const TagIndexItem = ({ tag, deleteTag, currentUser }) => {


  console.log(currentUser)
  // console.log(tag)
  // console.log(tag.tagger_id)
  return (
    <div className="tag">
     
         <div>
          {tag.name}
        </div>
      <div className="tag-settings">
        {currentUser.id === tag.tagger_id ? 
          <button onClick={() => deleteTag(tag.id)
            .then(() => { window.location.reload() })}>
              <i className="fa fa-trash"></i></button> 
              : 
              ""}
      </div>
    </div>
  )
}

export default TagIndexItem
////////////////////////////////////////////////////

// const ReviewIndexItem = props => {

//   return (
//     <div className='review-container'>
//       <div>
//         {props.currentUser && props.currentUser.id === props.review.user_id ?
//           <div className='x' onClick={() => props.deleteReview(props.review.id)
//             .then(() => { window.location.reload() })}>&times;</div> : ''}
//       </div>
//       <div className='review-rating'> <i className="fa fa-star"></i><div>
//       </div>{props.review.rating}</div>
//       <div>{props.review.review_name}</div>
//       <div className='review-comment'>{props.review.body}</div>
//     </div>
//   )
// }