import React from 'react'
import "./LoginLeft.css"

const LoginLeft = () => {
  return (
    <div className="login-left-panner">
        <div className="logo">
            AI-CHEMY
        </div>
        <div className="login-welcome">
            WELCOME
        </div>
        <hr className="line"></hr>
        <div className="login-description">
            We're providing image-generating service using stable diffusion. To get started, sign up!
        </div>
    </div>
  )
}

export default LoginLeft;