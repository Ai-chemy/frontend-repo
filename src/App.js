import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Components/Context/AuthContextProvider";
import MainPage from "./Components/Main/MainPage";
import SignIn from "./Components/SignIn/SignIn"
import ChangePasswordPage from "./Components/ChangePassword/ChangePasswordPage";
import GenerateImage from "./Components/GenerateImage/GenerateImage";
import TestShowImage from "./Components/TestShowImage/TestShowImage";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/ChangePassword" element={<ChangePasswordPage />} />
          <Route path="/generate" element={<GenerateImage />} />
          <Route path="/test" element={<TestShowImage />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter> 
  );
}

export default App;
