import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import SignInLeft from "./SignInLeft";
import SignInRight from "./SignInRight";
import "./SignIn.css";

const SignIn = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }) 

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <SignInLeft />
                <SignInRight />
            </div>
        </div>
    )
};

export default SignIn;

