import React from "react";
import { useNavigate } from "react-router-dom";

const MainPagePassword = () => {
    const navigate = useNavigate();
    const goToSign = () => {
        navigate("/ChangePassword");
    }
    return(
        <div className="SmallBox">
            <i onClick={goToSign} className="MainPagePassword">
                Forgot My Password
            </i>
        </div>
    )
}

export default MainPagePassword;