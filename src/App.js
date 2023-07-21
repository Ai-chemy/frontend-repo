import MainPage from "./Components/Main/MainPage";
import SignIn from "./Components/Login/Login"
import ChangePasswordPage from "./Components/ChangePassword/ChangePasswordPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginContextProvider from "./LoginContextProvider";
import GenerateImage from "./Components/GenerateImage/GenerateImage";

function App() {
  return (
  <LoginContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/ChangePassword" element={<ChangePasswordPage />} />
        <Route path="/generate" element={<GenerateImage />} />
      </Routes>
    </BrowserRouter> 
  </LoginContextProvider>
  );
}

export default App;
