import React from 'react'
import { Posts } from '../../data'
import Share from '../share/Share'
import Stories from '../Stories/Stories'
import './Feed.css'

import Post from '../Post/Post'

const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedwrapper">
        <Stories/> 
        <Share/>

        {Posts.map((p)=>(
          <Post key={p.id} Post={p}/>
          ))}
      </div>
    </div>
  )
}

export default Feed