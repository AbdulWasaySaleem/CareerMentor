import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

//Authentication
import ForgotPassword from "./components/Auth/ForgotPassword";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import MainLayout from "./layouts/MainLayout";
import VerifyIdentity from "./components/Auth/VerifyIdentity";
import ResetPassword from "./components/Auth/ResetPassword";

//Pages
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/verify-identity" element={<VerifyIdentity />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
