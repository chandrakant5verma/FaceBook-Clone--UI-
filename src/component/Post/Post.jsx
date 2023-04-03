import { ChatBubbleOutline, Favorite, MoreVert, ShareOutlined, ThumbDownAltOutlined, ThumbUp } from '@mui/icons-material'
import { IconButton } from '@mui/material'

import { Users } from '../../data'
import "./Post.scss"

import React from 'react'
import { Link } from 'react-router-dom'


const Post = ({ Post }) => {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                    <Link to="/login" style={{textDecoration:"none"}}>
                    
                    <img src={Users.filter((u) => u.id === Post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    </Link>
                        <span className="postUserName">{Users.filter((u) => u.id === Post.userId)[0].username}</span>
                        <span className="postDate">{Post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <IconButton>
                            <MoreVert className='postVertButton' />
                        </IconButton>
                    </div>
                </div>
                <div className="postcenter">
                    <span className="postText"> {Post.body}</span>
                    <img src={Post.photo} alt="" className="postImg" />
                </div>
                <div className="postbottom">
                    <div className="postBootomleft">
                        <Favorite className='bottomLeftIcon' style={{ color: "red" }} />
                        <ThumbUp className='bottomLeftIcon' style={{ color: "#011631" }} />
                        <span className="postlikecounter">{Post.like}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{Post.comment}:comments</span>
                    </div></div>
                <hr className="footerHr" />
                <div className="postBottomFooter">
                    <div className="postbottomfooterItem">
                        <ThumbDownAltOutlined className='footerIcon' />
                        <span className="footerText">Like</span>
                    </div>
                    <div className="postbottomfooterItem">
                        <ChatBubbleOutline className='footerIcon' />
                        <span className="footerText">Comment</span>
                    </div>
                    <div className="postbottomfooterItem">
                        <ShareOutlined className='footerIcon' />
                        <span className="footerText">Share</span>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Post