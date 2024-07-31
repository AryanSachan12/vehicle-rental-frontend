import React from "react";
import NavBar from "../Navigation/NavBar";
import LoginComponent from "./LoginComponent";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-[url('/assets/authentication/authentication.jpg')] bg-cover bg-no-repeat">
      <LoginComponent />
    </div>
  );
};

export default Login;
