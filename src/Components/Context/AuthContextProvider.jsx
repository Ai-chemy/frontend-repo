import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const localToken = localStorage.getItem("tokens")
    const localTokenJSON = localToken ? JSON.parse(localToken) : null

    const [user, setUser] = useState(() => localToken ? jwt_decode(localTokenJSON.access) : null);
    const [tokens, setTokens] = useState(() => localTokenJSON);
    const [loading, setLoading] = useState(true);
    const [isSignUpClicked, setIsSignUpClicked] = useState(false)
    const navigate = useNavigate();

    const signIn = async (event) => {
        event.preventDefault()

        const response = await fetch("http://localhost:8000/api/token/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": event.target.username.value, 
            "password": event.target.password.value,
        })
        })
        const data = await response.json()

        if (response.status === 200) {
            setTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem("tokens", JSON.stringify(data))
            navigate("/")
        }
        else {
            alert("Something went wrong!")
        }
    } 

    const signUp = async (event) => {
        const response = await fetch("http://localhost:8000/signup/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "username": event.target.username.value,
                "password": event.target.username.value,
                "email": event.target.email.target.value,
            })
        })
        const data = await response.json();

        if (response.status === 200) {
            navigate("/SignIn")
        }
        else {
            alert("Something went wrong!")
        }
    }

    const updateTokens = async () => {
        console.log("updateToken called")

        const response = await fetch("http://localhost:8000/api/token/refresh/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "refresh": tokens?.refresh
            })
        })
        const data = await response.json()

        if (response.status === 200) {
            setTokens(data)
            setUser(jwt_decode(data.access))   
            localStorage.setItem("tokens", JSON.stringify(data)) 
        } else {
            signOut()
        }
        
        if (loading) {
            setLoading(false)
        }
    }

    const signOut = () => {
        localStorage.removeItem("tokens")
        setUser(null)
        setTokens(null)
    }

    const goHome = () => {
        navigate("/")
    }

    useEffect(() => {
        if (loading) {
            updateTokens()
        }

        const interval = setInterval(() => {
            console.log("interval called")
            if (user) {
                updateTokens()
            }
        }, 2000)
        return () => clearInterval(interval)
    }, [tokens, loading]) 

    const contextData = {
        tokens: tokens,
        user: user,
        signIn: signIn,
        signUp: signUp,
        signOut: signOut,
        goHome: goHome,
        isSignUpClicked: isSignUpClicked,
        setIsSignUpClicked: (prop) => setIsSignUpClicked(prop),
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;