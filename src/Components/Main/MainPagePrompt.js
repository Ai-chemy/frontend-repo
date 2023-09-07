import React, {useState} from 'react'
import './MainPage.css';
import { useNavigate } from "react-router-dom";


const MainPagePrompt = () => {
    const [prompt, setPrompt] = useState();
    const navigate = useNavigate();
    const goToGenerate = () => {
        navigate("/generate", {state:{value:prompt}});
    }

    const onCheckEnter = (e) => {
        if(e.key === 'Enter') {
            goToGenerate();
        }
    }

    return(
        <div className='MainPagePromptBox'>
            <input 
            required 
            type='text'
            className='MainPagePromptInput' 
            placeholder ="Enter Your Prompt"
            onChange={(e) => setPrompt(e.target.value)}
            value = {prompt || ""}
            onKeyDown={onCheckEnter}
            ></input>
        </div>
    )
}

export default MainPagePrompt