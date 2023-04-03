import React from 'react'
import Navbar from "../Navbar/Navbar"
import Sidebar from '../sidebar/Sidebar'
import "./EditProfile.scss"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';


const EditProfile = () => {
    return (
        <div className='editProfile'>
            <Navbar />
            <div className="profileWrapper">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={require("../../pages/Profile/profilecover.jpg")} alt="" className='profileCoverImg' />
                            <img src={require("../../component/Navbar/user.jpg")} alt="" className="profileUserImg" />
                        </div>
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Amber Samual</h4>
                        <span className="profileInfoDes">Hi Friends!</span>
                    </div>
                    <div className="profileRightbottom">
                        <div className="top">
                            <h1>Edit Your Profile</h1>
                        </div>
                        <div className="Bottom">
                            <div className="left">
                                <img src={require("../EditProfile/DefaultProfile.jpg")} alt="" />
                            </div>
                            <div className="right">
                                <form >

                                    <div className="formInput">
                                        <label htmlFor='form'>
                                            Image:  <DriveFolderUploadIcon className="Icon" />
                                        </label>
                                        <input type="file" id="file" style={{ display: "none" }} />
                                    </div>
                                    <div className="formInput">
                                        <lable>Username</lable>
                                        <input type="text" placeholder='Jane_boy' />
                                    </div>
                                    <div className="formInput">
                                        <lable>Email</lable>
                                        <input type="text" placeholder='ZJane_doe@gmail.com' />
                                    </div>
                                    <div className="formInput">
                                        <lable>Phone</lable>
                                        <input type="text" placeholder='+4 123 456 789' />
                                    </div>
                                    <div className="formInput">
                                        <lable>Address</lable>
                                        <input type="text" placeholder='Methiow SentThomson Chapra' />
                                    </div>
                                    <div className="formInput">
                                        <lable>Country</lable>
                                        <input type="text" placeholder='United Kingdom' />
                                    </div>
                                    <button className="updateButton" type='button'  name="data"  onclick="getData()">Update Profile</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default EditProfile