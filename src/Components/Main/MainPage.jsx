import { useContext, useRef } from 'react';
import { AuthContext } from '../Context/AuthContextProvider.jsx';

import Title from "./Title.jsx";
import MainPagePrompt from "./MainPagePrompt.jsx";
import MainPageBackGroundImage from "../../assets/MainPageBackGroundImage.png";
import MainPageExplainText from "./MainPageExplainText.jsx";
import MainPageLogin from "./MainPageLogin.jsx";
import MainPagePassword from "./MainPagePassword.jsx";

import GenerateImage from "../GenerateImage/GenerateImageBtn.jsx";
import ShowImg from "../ShowImage/ShowImageBtn.jsx";

import './MainPage.css';


const MainPage = () => {
    const { user, signOut } = useContext(AuthContext);
    const scrollEnd = useRef(null);

    return(
        <div>
            <div className="TitleAndPrompt">
                <Title />
                <MainPagePrompt />
                <MainPageExplainText ref={scrollEnd}/>
            </div>
            
            {user ? (
                <div className="LoginAndPassword" style={{color:"white"}}>
                    <div className='SmallBox' style={{width: '50%'}}>
                        <GenerateImage />
                    </div>
                    <div className='SmallBox'>
                        <ShowImg />
                    </div>
                    <div className='SmallBox'>
                        <i onClick={signOut} style={{cursor:'pointer'}}>sign out</i>
                    </div>
                </div>
            ) : (
                <div className="LoginAndPassword">
                    <MainPageLogin/>
                    <MainPagePassword/>
                </div>
            )}
            
            <div className='MainExplainEffectContainer'>
                <i className='MainExplainTextEffect'>We are providing images by using stable diffusion.</i>
                <i className='MainExplainTextEffect'>You can get your own images from our website.</i>
                <i className='MainExplainTextEffect'>Click the sign in button on the upper right and generate your own images! </i>
            </div>
            <div className='MainExplainContainer'>
                <i className='MainExplainText' id='bottomScrollEnd' ref={scrollEnd}>We are providing images by using stable diffusion.</i>
                <i className='MainExplainText'>You can get your own images from our website.</i>
                <i className='MainExplainText'>Click the sign in button on the upper right and generate your own images! </i>
            </div>
            
            <img id="MainBG" src={MainPageBackGroundImage} className="MainImage" alt=""/>
        </div>
    )
}

export default MainPage;