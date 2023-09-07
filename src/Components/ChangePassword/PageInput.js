import { useState }from "react";
import { useNavigate } from "react-router-dom";
import './ChangePasswordPage.css';

const PageInput = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const goToRestPage = () => {
        navigate("/ChangePassword/reset", {state:{value:email}});
    }

    const sendEmail = async (useremail) => {
        const response = await fetch("http://127.0.0.1:8000/api/email/", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            "email": useremail
          })
        })
    
        const data = await response.json()
        return data
    }
    
    const onCheckEnter = (e) => {
        if(e.key === 'Enter') {
          sendEmail(email)
          goToRestPage()
        }
    }

    return(
        <div>
            <input 
            required 
            className='ChangePasswordPageInput' 
            type="email" 
            placeholder ="Write your E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value = {email}
            onKeyDown={onCheckEnter}
            />
        </div>
    )
}

export default PageInput