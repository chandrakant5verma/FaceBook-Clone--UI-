import { EmojiEmotions, PermMedia, VideoCameraFront } from '@mui/icons-material';
import React from 'react'
import "./share.scss";

const Share = () => {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src={require("../Stories/user.jpg")} className='shareProfileImg' alt="" />
                <input type="text" placeholder='What on your mind amber!' className="shareinput" />
            </div>
            <hr className="shareHr" />
            <div className="Sharebottom">
                <div className="shareOptions">
                    <div className="shareoption">
                        <VideoCameraFront className='shareIcon' style={{color:"#bb0000f2"}}/>
                        <span className="shareOptionText">Live Video </span>
                    </div>
                    <div className="shareoption">
                        <PermMedia className='shareIcon' style={{color:"#2e0196f1"}}/>
                        <span className="shareOptionText">Photos/videos </span>
                    </div>
                    <div className="shareoption">
                        <EmojiEmotions className='shareIcon'style={{color:"#bfc600ec"}}/>
                        <span className="shareOptionText">Feelings/Activity </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Share