import MainPage from "./Components/Main/MainPage";
import SignIn from "./Components/Login/Login"
import ChangePasswordPage from "./Components/ChangePassword/ChangePasswordPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="" element={<MainPage />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/ChangePassword" element={<ChangePasswordPage />} />
    </Routes>
  </BrowserRouter> 
  );
}

export default App;
