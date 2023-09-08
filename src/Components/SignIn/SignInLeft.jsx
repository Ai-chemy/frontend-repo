import { useNavigate } from "react-router-dom"
import "./SignInLeft.css"

const SignInLeft = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/")
  }

  return (
    <div className="login-left-panner">
        <div className="logo-container">
          <div className="logo-text" onClick={handleClick}>
            AI-CHEMY
          </div>
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

export default SignInLeft;