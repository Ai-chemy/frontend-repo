import Title from "./Title.js";
import MainPagePrompt from "./MainPagePrompt.js";
import MainPageBackGroundImage from "../../Assets/MainPageBackGroundImage.png";
import MainPageExplainText from "./MainPageExplainText.js";
import MainPageLogin from "./MainPageLogin.js";
import MainPagePassword from "./MainPagePassword.js";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useContext } from 'react';
import { LoginContext } from "../../LoginContextProvider.js";
import GenerateImage from "../GenerateImage/GenerateImageBtn.js";
import './MainPage.css';


const MainPage = () => {
    const { isLogin, setIsLoginHandler } = useContext(LoginContext);

    return(
        <div>
            <div className="TitleAndPrompt">
                <Title />
                <MainPagePrompt />
                <MainPageExplainText />
            </div>
            
            {!isLogin ? <div className="LoginAndPassword">
                <MainPageLogin/>
                <MainPagePassword/>
            </div> : <div className="LoginAndPassword" style={{color:"white"}}><GenerateImage /></div>}
            
            <img src={MainPageBackGroundImage} className="MainImage" alt="" />

            {/* 아래는 테스트용 */}
            <button onClick={() => {
                setIsLoginHandler(true)
            }}>
                click here
            </button>
            <button onClick={() => {
                console.log(isLogin)
            }}>
                click here2
            </button>
        </div>
        
    )
}

export default MainPage;