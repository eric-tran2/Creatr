import React, { useState } from 'react';


const TagIndexItem = ({ tag, deleteTag, currentUser }) => {


 
  return (
    <div className="tagItem">
         <div>
          {tag.name}
        </div>
      <div className="tag-settings">
        {currentUser.id === tag.tagger_id ? 
          <span className="deleteTagButton"onClick={() => deleteTag(tag.id)
            .then(() => { window.location.reload() })}>
              <i className="fa fa-times"></i></span> 
              : 
              ""}
      </div>
    </div>
  )
}

export default TagIndexItem
