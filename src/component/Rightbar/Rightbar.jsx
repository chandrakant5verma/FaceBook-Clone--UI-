import React from 'react'
import './Righbar.scss'
import Rightbarhome from "../rightbarhome/RightbarHome"
import ProfilerightBar from '../profileRightBar/ProfilerightBar'

const Rightbar = (profile) => {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
       {profile? <ProfilerightBar/> : <Rightbarhome  />}
        
      </div>
    </div>
  )
}

export default Rightbar