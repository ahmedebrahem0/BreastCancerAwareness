import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./component/Layout/MainLayout";
import NotFound from "./component/NotFound/NotFound";
import Cheek from "./component/Cheek/Cheek";
import Login from "./component/Authentication/Login/Login.jsx";
import Symptoms from "./component/Symptoms/Symptoms.jsx";
import DashBoard from "./component/DashBoard/DashBoard.jsx";
import Contact from "./component/Contact/Contact";
import Register from "./component/Authentication/Register/Register.jsx";
import ForgetPassword from "./component/Authentication/ForgetPassword/ForgetPassword.jsx";
import Treatment from "./component/Treatment/Treatment.jsx";
import VerifyResetCode from "./component/Authentication/VerifyResetCode/VerifyCode.jsx";
import FAQs from "./component/FAQs/FAQs.jsx";
import ResetPassword from "./component/Authentication/ResetPassword/ResetPassword.jsx";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
export default function App() {

  

  const [crrUser, setCrrUser] = useState([null]);
  
    function getUserData() {
      //decode user data
      const userData = jwtDecode(localStorage.getItem("token"));
      console.log("userData from app", userData);
      setCrrUser(userData);
  }
  console.log("crrUser from app", crrUser);
    function clearUserData() {
      localStorage.removeItem("token");
      setCrrUser(null);
    }
  const routers = createBrowserRouter([
    {
      path: "/BreastCancerAwareness",
      element: <MainLayout crrUser={crrUser} clearUserData={clearUserData} />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home crrUser={crrUser} /> },
        { path: "Home", element: <Home /> },
        { path: "Register", element: <Register /> },
        { path: "Cheek", element: <Cheek /> },
        { path: "Symptoms", element: <Symptoms /> },
        { path: "Footer", element: <Footer /> },
        { path: "DashBoard", element: <DashBoard /> },
        { path: "Treatment", element: <Treatment /> },
        { path: "VerifyCode", element: <VerifyResetCode /> },
        { path: "FAQs", element: <FAQs /> },
        { path: "Contact", element: <Contact /> },
        { path: "ForgetPass", element: <ForgetPassword /> },
        { path: "Login", element: <Login getUserData={getUserData} /> },
        { path: "ResetPassword", element: <ResetPassword /> },
      ],
    },
  ]);

  return (
    <>
      <div>
          <ToastContainer theme="colored" />
          <RouterProvider router={routers} />
      </div>
    </>
  );
}
