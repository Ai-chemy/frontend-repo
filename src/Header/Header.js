import { useContext } from "react";
import { AuthContext } from "../Components/Context/AuthContextProvider";
import "./Header.css"

const Header = () => {
    const { signOut, goHome } = useContext(AuthContext)

    return (
        <div className="header-wrapper">
            <div className="header-container">
                <div className="header-font" onClick={goHome}>
                    AI-CHEMY
                </div>
                <div className="header-font" onClick={signOut}>
                    SIGNOUT
                </div>
            </div>
        </div>
    )
}

export default Header;