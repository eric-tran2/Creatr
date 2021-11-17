import React, { useState } from 'react';


const TagIndexItem = ({ tag, deleteTag }) => {
  // const [name, setName] = useState(tag.name);


  return (
    <div className="tag">
     
         <div>
          {tag.name}
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
