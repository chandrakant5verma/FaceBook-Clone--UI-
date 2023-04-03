import React from 'react'
import StoryCard from '../StoryCard/StoryCard';
import "./stories.css"
import { Users } from '../../data';


const Stories = () => {
  return (
    <div className='Stories'>
        <div className="storyCard">
         
          <img src={require("../Stories/user.jpg")} alt="" className="storyProfile" />
          <img src={require("../Stories/user.jpg")} alt="" className="storyBackground" />
          <img src={require("../Stories/upload.png")} alt="" className="storyAdd" />
          <span className="text">Amber</span>
        </div>
        {Users.map((u) => (
          <StoryCard key={u.id} user={u} />
        ))}
        
       
    </div>
  )
}

export default Stories