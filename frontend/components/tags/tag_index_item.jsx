import React, { useState } from 'react';


const TagIndexItem = ({ tag, deleteTag, currentUser }) => {


 
  return (
    <div className="tagItem">
         <div>
          {tag.name}
        </div>
        {currentUser.id === tag.tagger_id ? 
          <span className="delete-tag-button"onClick={() => deleteTag(tag.id)
            .then(() => { window.location.reload() })}>
              <i className="fa fa-times"></i></span> 
              : 
              ""}
    </div>
  )
}

export default TagIndexItem
