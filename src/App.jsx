import { useState } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Components/Context/AuthContextProvider";
import MainPage from "./Components/Main/MainPage";
import SignIn from "./Components/SignIn/SignIn"
import ChangePasswordPage from "./Components/ChangePassword/ChangePasswordPage";
import ChangePasswordResetPage from "./Components/ChangePassword/ChangePasswordResetPage"
import GenerateImage from "./Components/GenerateImage/GenerateImage";
import ShowImage from "./Components/ShowImage/ShowImage";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/ChangePassword" element={<ChangePasswordPage />} />
          <Route path="/ChangePassword/reset" element={<ChangePasswordResetPage />} />
          <Route path="/generate" element={<GenerateImage />} />
          <Route path="/show" element={<ShowImage />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter> 
  );
}

export default App;

