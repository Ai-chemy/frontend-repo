import React from 'react'
import { useState, useContext } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import "./LoginRight.css";
import { LoginContext } from "../../LoginContextProvider";

const LoginRight = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLogin, setIsLoginHandler } = useContext(LoginContext);
  const navigate = useNavigate();

  /* 
    @author Junhyeok
    @todo 
  */
  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData();

    formData.append("username", username)
    formData.append("password", password)

    const response = await axios
      .post('http://localhost:8000/login', formData)
      // then은 정상적으로 데이터를 받았을 경우
      // catch는 에러가 발생했을 경우
      // finally는 무조건 실행
      .then(async (res) => {
        console.log(res)
        const accessToken = {
          value: res.data?.data?.access_token,
          expire: Date.now() + 3600
        }
        const temp = JSON.stringify(accessToken)
        localStorage.setItem("access_token", temp)
        setIsLoginHandler(true)
        navigate("/")
      })
      .catch((e) => {
        alert("다시 시도하세요.")
      })
      .finally(() => {
        setUsername("")
        setPassword("")
      })
  }

  return (
    <div className="login-right-panner">
      <form className="login-form-wrapper" onSubmit={handleSubmit}>
        <div className="login-form-top">
          Sign In Now!
        </div>
        <input 
          type="text" 
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input 
          type="password" 
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

export default LoginRight