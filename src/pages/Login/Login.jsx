// import { DriveFolderUploadOutlined } from '@mui/icons-material'
import React from 'react'
import "./Login.scss"
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='login'>
            <div className="loginWraper">
                <div className="loginLeft">
                    <h3 className="loginLogo">FeceBook</h3>
                    <span className="loginDesc">
                        Connect with Friends and the World Around You On FaceBook.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">

                        <div className="Bottom">
                            <form action="" className='BOTTOMbOX'>

                                <input
                                    type="email"
                                    placeholder="Email"
                                    id="email"
                                    className="loginInput"
                                    required
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    id="password"
                                    className="loginInput"
                                    required
                                />

                                <Link to="/register" style={{textDecoration:"none"}} >
                                
                                <button className="loginResisterButton">Log Into Account</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login