import { useEffect, useRef } from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import "./SignInRight.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const { signUp } = useContext(AuthContext);
  const { isSignUpClicked, setIsSignUpClicked } = useContext(AuthContext);
  const [fade, setFade] = useState("");
  const [margin, setMargin] = useState("");

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFade("end");
      setMargin("margin-expanded");
    }, 10);

    return () => {
      clearTimeout(fadeTimer);
      setFade("");
      setMargin("");
    };
  }, [isSignUpClicked]);

  const handleSubmit = (event) => {
    if (event.target.password.value !== event.target.passwordConfirm.value) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      signUp(event);
    }
  };

  return (
    <div className={"login-right-panner start " + fade}>
      <form className="login-form-wrapper" onSubmit={handleSubmit}>
        <div className="login-form-top">Sign Up Now!</div>
        <input
          className={margin}
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          className={margin}
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          className={margin}
          type="password"
          name="passwordConfirm"
          placeholder="Password-confirm"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
        />
        <input
          className={margin}
          type="email"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button className="login-button">SIGN UP</button>
      </form>

      <div className="login-bottom-wrapper">
        <div className="login-bottom-des">
          Already have an account? Sign in here.
        </div>
        <button
          className="login-button"
          onClick={() => setIsSignUpClicked(false)}
          style={{ marginTop: "10px" }}
        >
          Go for sign in
        </button>
      </div>
    </div>
  );
};

export default SignUp;
