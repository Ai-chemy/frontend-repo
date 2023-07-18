import React from 'react'
import "./LoginRight.css";

const LoginRight = () => {
  return (
    <div className="login-right-panner">
      <form className="login-form-wrapper">
        <div className="login-form-top">
          Sign In Now!
        </div>
        <input 
          type="text" 
          placeholder="Username"
        />
        <input type="password" placeholder="Password"></input>
        <button className="login-button">SIGN IN</button>
      </form>

      <div className="login-bottom-wrapper">
        <div className="login-bottom-des">
          If You Don't Have An Account, Sign Up Here!
        </div>
        <button className="login-button" style={{marginTop:"10px"}}>Go for sign up</button>
      </div>
    </div>
  )
}

export default LoginRight