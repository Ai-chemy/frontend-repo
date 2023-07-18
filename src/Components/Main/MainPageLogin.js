import React from "react";
import { useNavigate } from "react-router-dom";

const MainPageLogin = () => {
    const navigate = useNavigate();
    const goToSign = () => {
        navigate("/SignIn");
    }
    return(
        <div className="SmallBox">
            <div onClick={goToSign} className="MainPageLogin">
                SignIn
            </div>
        </div>
    )
}

export default MainPageLogin;