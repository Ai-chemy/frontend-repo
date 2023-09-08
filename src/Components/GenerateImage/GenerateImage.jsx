import { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import Header from "../../Header/Header";
import "./GenerateImage.css"

const GenerateImage = () => {
    const { user, tokens, goHome } = useContext(AuthContext);
    const [prompt, setPrompt] = useState();
    
    const location = useLocation();

    const navigate = useNavigate();
    const handleClick = async () => {
        if (!user) {
            navigate("/")
        }
        
        const response = await fetch("http://localhost:8000/api/generate/", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + String(tokens.access),
            },
            body: JSON.stringify({
                "prompt": prompt
              })
        })
        const data = await response.json()

        if (response.status === 200) {
            console.log(data)
            alert("request has been sent.")
        }
        else {
            alert("request failed.")
        }
    }

    useEffect(() => {
        if (!user) {
            navigate("/SignIn")
        }
    })

    useEffect(() => {
        try{
            setPrompt(location.state.value)
        }
        catch(error){
            setPrompt("")
        }
    }, [])

    return (
        <div className="generate-root">
            <div className="generate-wrapper">
                <Header /> 
                <div className="generate-container">
                    <div className="generate-form-container">
                        <input className="generate-prompt" type="text" placeholder="Enter your prompt" onChange={(e) => setPrompt(e.target.value)} value={prompt || ''}/>
                        <input className="generate-prompt" type="text" placeholder="Enter your negative prompt"/>
                        <button className="generate-button" onClick={handleClick}>generate</button>
                    </div>
                    <div className="generate-image-box">
                        Image will be rendered here
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default GenerateImage;