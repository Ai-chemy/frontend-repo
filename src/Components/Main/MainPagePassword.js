import React from "react";
import { useNavigate } from "react-router-dom";

const MainPagePassword = () => {
    const navigate = useNavigate();
    const goToSign = () => {
        navigate("/ChangePassword");
    }
    return(
        <div className="SmallBox">
            <div onClick={goToSign} className="MainPagePassword">
                Forgot My Password
            </div>
        </div>
    )
}

export default MainPagePassword;