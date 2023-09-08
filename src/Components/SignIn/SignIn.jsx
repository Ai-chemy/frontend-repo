import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import SignInLeft from "./SignInLeft";
import SignInRight from "./SignInRight";
import SignUp from "./SignUp";
import "./SignIn.css";

const SignIn = () => {
  const { user, isSignUpClicked } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <SignInLeft />
        {isSignUpClicked ? <SignUp /> : <SignInRight />}
      </div>
    </div>
  );
};

export default SignIn;
