import React, { useState } from 'react';


const TagIndexItem = ({ tag, deleteTag }) => {
  const [body, setBody] = useState(tag.body);


  return (
    <div className="tag">
     
         <div>
          {tag.body}
        </div>
      <div className="tag-settings">
        <button onClick={() => deleteTag(tag.id)}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  )
}

export default TagIndexItem
