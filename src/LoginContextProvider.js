import { createContext, useState } from "react";

export const LoginContext = createContext({
    isLogin: null,
    setIsLoginHandler: () => {}
});

const LoginContextProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(false);
    const setIsLoginHandler = (prop) => setIsLogin(prop);

    return (
        <LoginContext.Provider value={{ isLogin, setIsLoginHandler }}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider;