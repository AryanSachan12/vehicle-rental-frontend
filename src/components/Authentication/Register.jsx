import React from "react";
import RegisterComponent from "./RegisterComponent";

const Register = () => {
  return (
    <div className="h-screen overflow-auto flex justify-center items-center bg-[url('/assets/authentication/authentication.jpg')] bg-cover bg-no-repeat">
      <RegisterComponent />
    </div>
  );
};

export default Register;
