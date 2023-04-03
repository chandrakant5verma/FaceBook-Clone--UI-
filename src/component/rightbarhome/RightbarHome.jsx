import React from 'react'
import "./Rightbarhome.scss"
import Online from "../online/Online"
import { Usersonline } from '../../data'


const RightbarHome = () => {
  return (
    <div className='rightBarhome'>
      <div className="birthdaycontainer">
        <img src={require("../rightbarhome/gift.png")} alt="" className="birthdayImg" />
        <span className="birthdayText"> <b>SaMueal</b> Have <b>Bithday</b> Today</span>
      </div>
      <img src={require("../rightbarhome/adv.jpg")} alt="" className="rightBarAdvert" />
      <span className='rightbarTitle'>Online Friends</span>

      <ul className="rightbarFriendslist">
      <online/>
      {Usersonline.map((u) => (
        <Online key={u.id} onlineuser={u} />
      ))}
      </ul>
    </div>
  )
}

export default RightbarHome