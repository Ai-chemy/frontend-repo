import MainPage from "./Components/Main/MainPage";
import SignIn from "./Components/Login/Login"
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="" element={<MainPage />} />
      <Route path="/SignIn" element={<SignIn />} />
    </Routes>
  </BrowserRouter> 
  );
}

export default App;
