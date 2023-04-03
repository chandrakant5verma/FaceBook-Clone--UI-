import  Feed from "../../component/feed/Feed"
import React from 'react'
import Navbar from "../../component/Navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import "./Profile.scss"
import Rightbar from "../../component/Rightbar/Rightbar";

const Profile = (profile) => {
  return (
    <div className='Profile'>
        <Navbar/>
        <div className="profileWrapper">
            <Sidebar/>
            <div className="profileRight">
              <div className="profileRightTop">
                <div className="profileCover">
                  <img src={require("../../pages/Profile/profilecover.jpg")} alt="" className='profileCoverImg'/>
                  <img src={require("../../component/Navbar/user.jpg")} alt="" className="profileUserImg" />
                </div>
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">Amber Samual</h4>
                <span className="profileInfoDes">Hi Friends!</span>
              </div>
              <div className="profileRightbottom">
                <Feed/>
                <Rightbar profile/>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Profile