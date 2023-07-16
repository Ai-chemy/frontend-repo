import Title from "./Title.js";
import MainPagePrompt from "./MainPagePrompt.js";
import MainPageBackGroundImage from "../Assets/MainPageBackGroundImage.png";
import MainPageExplainText from "./MainPageExplainText.js";
import MainPageLogin from "./MainPageLogin.js";
import MainPagePassword from "./MainPagePassword.js";

import './MainPage.css';

const MainPage = () => {
    return(
        <div>
            <div className="TitleAndPrompt">
                <Title />
                <MainPagePrompt />
                <MainPageExplainText />
            </div>
            <div className="LoginAndPassword">
                <MainPageLogin/>
                <MainPagePassword/>
            </div>
            <img src={MainPageBackGroundImage} className="MainImage"/>
        </div>
        
    )
}

export default MainPage;