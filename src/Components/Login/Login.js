import React from "react";
import LoginLeft from "./LoginLeft";
import "./Login.css";
import LoginRight from "./LoginRight";

const Login = () => {
    return (
        <div className="login-wrapper">
            <LoginLeft />
            <LoginRight />
        </div>
    )
};

export default Login;

