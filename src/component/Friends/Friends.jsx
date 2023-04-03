import React from 'react'
import "../Friends/friends.css"

const Friends = ({user}) => {
  return (
    <div>
    <li className="sidebarfriship">
        <img src={user.profilePicture} alt="" className='sideFriendImage'/>
        <span className="sidebarFriendName">{user.username}</span>

    </li>

    </div>
  )
}

export default Friends

