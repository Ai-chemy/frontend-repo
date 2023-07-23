import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider.js';

import Title from "./Title.js";
import MainPagePrompt from "./MainPagePrompt.js";
import MainPageBackGroundImage from "../../Assets/MainPageBackGroundImage.png";
import MainPageExplainText from "./MainPageExplainText.js";
import MainPageLogin from "./MainPageLogin.js";
import MainPagePassword from "./MainPagePassword.js";

import GenerateImage from "../GenerateImage/GenerateImageBtn.js";

import './MainPage.css';


const MainPage = () => {
    const { user, signOut } = useContext(AuthContext)

    return(
        <div>
            <div className="TitleAndPrompt">
                <Title />
                <MainPagePrompt />
                <MainPageExplainText />
            </div>
            
            {user ? (
                <div className="LoginAndPassword" style={{color:"white"}}>
                    <GenerateImage />
                    <button onClick={signOut}>sign out</button>
                </div>
            ) : (
                <div className="LoginAndPassword">
                    <MainPageLogin/>
                    <MainPagePassword/>
                </div>
            )}
            
            <img src={MainPageBackGroundImage} className="MainImage" alt="" />
        </div>
        
    )
}

export default MainPage;