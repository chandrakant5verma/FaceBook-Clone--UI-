import React from 'react'
import "./ProfileRightbar.scss"
import { Link } from 'react-router-dom'

const ProfilerightBar = () => {
    return (
        <div className='ProfileRightBar'>
            <div className="ProfileRigBarHeading">
                <span className="ProfileRightBarTitle">User Information</span>
                <Link to="/Profile:username/edit" style={{ textDecoration: "none" }}>
                    <span className="editButton">Edit Profile</span>
                </Link>
            </div>
            <div className="profileRightbarInfo">
                <div className="profileRightBarInfoItem">
                    <span className="profileRightBarInfoKey">Email :</span>
                    <span className="profileRightBarInfoValue">ChandrakantVerma@gmail.com</span>
                </div>
                <div className="profileRightBarInfoItem">
                    <span className="profileRightBarInfoKey">Phone Num :</span>
                    <span className="profileRightBarInfoValue">87xxxxxx49</span>
                </div>
                <div className="profileRightBarInfoItem">
                    <span className="profileRightBarInfoKey">Linkdin :</span>
                    <span className="profileRightBarInfoValue">ChandraAmber/5</span>
                </div>
                <div className="profileRightBarInfoItem">
                    <span className="profileRightBarInfoKey">Address :</span>
                    <span className="profileRightBarInfoValue">Banglore i am coming Right now</span>
                </div>
                <div className="profileRightBarInfoItem">
                    <span className="profileRightBarInfoKey">Relationship :</span>
                    <span className="profileRightBarInfoValue  ready">Ready to be Mingle</span>
                </div>
            </div>

            <h4 className="profileRightBarTitle">Close Friends</h4>
            <div className="profileRightBarFollowings">
                <div className="profileRightBarFollowing">
                    <img src={require("./friend5.jpg")} alt="" className="profileRightBarFollowingImg" />
                    <span className="profileRightBarFollowingNamr">Janet</span>
                </div>
                <div className="profileRightBarFollowing">
                    <img src={require("./friend6.jpg")} alt="" className="profileRightBarFollowingImg" />
                    <span className="profileRightBarFollowingNamr">Isabell</span>
                </div>
                <div className="profileRightBarFollowing">
                    <img src={require("./friend11.jpg")} alt="" className="profileRightBarFollowingImg" />
                    <span className="profileRightBarFollowingNamr">Horliena</span>
                </div>
                <div className="profileRightBarFollowing">
                    <img src={require("./friend8.jpg")} alt="" className="profileRightBarFollowingImg" />
                    <span className="profileRightBarFollowingNamr">Sujain</span>
                </div>

            </div>
        </div>
    )
}

export default ProfilerightBar


