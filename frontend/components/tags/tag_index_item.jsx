import React, { useState } from 'react';


const TagIndexItem = ({ tag, deleteTag, currentUser }) => {


 
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
