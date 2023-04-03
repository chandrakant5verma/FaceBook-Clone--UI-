import { DriveFolderUploadOutlined } from '@mui/icons-material'
import React from 'react'
import "./Register.scss"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
        <div className="registerWrapper">
            <div className="RegisterLeft">
                <h3 className="registerLogo">Facebook</h3>
                <span className="registerDesc">
                    Connect with Friends and the World Around You On FaceBook.
                </span>
            </div>
           <div className="registerRight">
            <div className="registerBox">
                <div className="top">
                    <img src={require("./DefaultProfile.jpg")} alt="" className='profileImg' />
                
                <div className="formInput">
                    <label htmlFor='file'>
                        Image: <DriveFolderUploadOutlined className='Icon'/>
                        <input type="file" name='file' id='file' accept='.png,.jpeg,.jpg' style={{display:"none"}}></input>
                    </label>

                </div>
                </div>
                <div className="Bottom">
                    <form action="" className='BOTTOMbOX'>
                        <input type="text" placeholder='Username' id='ConformPassword' className='resiterInput' required/>
                        <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        className="resiterInput"
                        required
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        className="resiterInput"
                        required
                      />
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        id="confirmPasword"
                        className="resiterInput"
                        required
                      />
                        <Link to="/login" style={{textDecoration:"none"}}>
                        
                        <button type='submit' className="registerButton">Sing up</button>
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

export default Register