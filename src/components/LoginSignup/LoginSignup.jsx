import React, { useState } from 'react'
import "./LoginSignup.css"
import user_icon from "../Assets/profile-user.png"
import email_icon from "../Assets/email.png"
import password_icon from "../Assets/padlock.png"

const LoginSignup = () => {
    const [action,setAction] = useState("Sign Up")
  return (
    <div className="bg">
    <div className='container'>
        <div className='header'>
            <div className="text">{action}</div>
            <div className="underline"></div>
                    <div className="inputs">
                        {action==="Login"?<div></div>: <div className="input" >
                            <img className='usericon' src={user_icon} alt="" />
                            <input type="text" placeholder='Name' />
                        </div>}
                        </div>
                        <div className="input">
                            <img className='usericon' src={email_icon} alt="" />
                            <input type="Email" placeholder='Email Id' />
                        </div>
                        <div className="input">
                            <img className='usericon' src={password_icon} alt="" />
                            <input type="Password" placeholder='Password' />
                        </div>
                    </div>
                    {action === "Sign Up"?<div></div>:<div className="forgot-password">Lost Password?<span>Click Here!</span></div>}
                    
                    <div className="submit-container">
                        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
                    </div>
                    

                </div>
            
            
                </div>
  )
}

export default LoginSignup