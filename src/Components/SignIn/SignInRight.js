import React from 'react'
import { useState, useContext } from 'react';
import { AuthContext } from "../Context/AuthContextProvider";
import "./SignInRight.css";

const SignInRight = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);

  const handleSubmit = (event) => {
    signIn(event)
  }

  return (
    <div className="login-right-panner">
      <form className="login-form-wrapper" onSubmit={handleSubmit}>
        <div className="login-form-top">
          Sign In Now!
        </div>
        <input 
          type="text" 
          name="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input 
          type="password" 
          name="password"
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
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

export default SignInRight;