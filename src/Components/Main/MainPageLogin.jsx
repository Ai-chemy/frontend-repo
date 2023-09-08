import React from "react";
import { useNavigate } from "react-router-dom";

const MainPageLogin = () => {
    const navigate = useNavigate();
    const goToSign = () => {
        navigate("/SignIn");
    }
    return(
        <div className="SmallBox">
            <i onClick={goToSign} className="MainPageLogin">
                SignIn
            </i>
        </div>
    )
}

export default MainPageLogin;