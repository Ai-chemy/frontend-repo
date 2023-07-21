import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../LoginContextProvider";

const GenerateImage = () => {
    const { isLogin } = useContext(LoginContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogin)
            navigate("/SignIn")
    })

    return (
        <div>
            GenerateImage Page
        </div>
    )
    
}

export default GenerateImage;