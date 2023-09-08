import React, { useEffect } from 'react'
import { useState }from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './ChangePasswordPage.css';


const ChangePasswordResetPage = () => {
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [uuid, setUuid] = useState("");
    const[warningMessage, setWarningMessage] = useState("");
    const location = useLocation();
    const [email, setEmail] = useState();

    const navigate = useNavigate();
    const goToMain = () => {
        navigate("/");
    }
    useEffect(() => {
        //ChangePassword페이지에서 넘어왔는지 검증
        try{
            setEmail(location.state.value)
        }
        catch(error){
            goToMain()
        }
    }, [])
    
    const resetPassword = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/reset/", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            "email": email,
            "password":password,
            "uuid":uuid
          })
        })
    
        const data = await response.json()
        return data
    }

    const onCheckEnter = (e) => {
        if(e.key === 'Enter') {
            if((password === "" || password2 === "" || uuid === "" )) setWarningMessage("Please fill the input")
            else if(password !== password2) setWarningMessage("Your password is not same")
            else{
                resetPassword().then(res => {
                    if(res['result'] !== "PASSWORD_HAS_BEEN_CHANGED"){
                        setWarningMessage("Request failed, Check your uuid")
                    }
                    else{
                        goToMain()
                    }
                })
            }
        }
    }

    return(
        <div className="CHangePasswordResetComponents">
            <div className='ChangePasswordTitle'>We have sent a token to your email</div>
            <input 
            required 
            className='ChangePasswordPageInput' 
            type="password" 
            placeholder ="Write your new password"
            onChange={(e) => setPassword(e.target.value)}
            value = {password}
            onKeyDown={onCheckEnter}
            />

            <input 
            required 
            className='CHangePasswordResetPageSecondInput' 
            type="password" 
            placeholder ="Write password again"
            onChange={(e) => setPassword2(e.target.value)}
            value = {password2}
            onKeyDown={onCheckEnter}
            />

            <input 
            required 
            className='CHangePasswordResetPageThirdInput' 
            type="text" 
            placeholder ="Write your token you received"
            onChange={(e) => setUuid(e.target.value)}
            value = {uuid}
            onKeyDown={onCheckEnter}
            />

            <div className='CHangePasswordResetPageWarningMessage'>{warningMessage} </div>
        </div>
    )
}
export default ChangePasswordResetPage;