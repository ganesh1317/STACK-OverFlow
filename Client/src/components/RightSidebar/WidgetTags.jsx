import React from 'react'

const WidgetTags = () => {
  const tags = ['c', 'css', 'expresss', 'firebase', 'html', 'java', 'javascript', 'mern', 'mongodb', 'mysql', 'nodejs', 'php', 'python', 'reactjs']
  return (
    <div className='widget-tags'>
      <h4>Watched tags</h4>
      <div className='widget-tags-div'>
        {
          tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))
        }
      </div>
    </div>
  )
}

export default WidgetTags
