import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

const GenerateImage = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/SignIn")
        }
    })

    return (
        <div>
            {user ? (
                <div>
                    GenerateImage Page
                </div>
            ) : (
                null
            )}
        </div>
    )
    
}

export default GenerateImage;