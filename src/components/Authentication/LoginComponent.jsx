import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const LoginComponent = () => {
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  async function handleLoginSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    try {
      const response = await axios.post("/login", data, {
        withCredentials: true,
      });
      alert("login successful");

      setUser(response.data);

      setRedirect(true);
    } catch (error) {
      alert("login failed");
    }
  }

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="mt-4 rounded-2xl bg-[#d1d7e0] px-4 py-20">
      <h1 className="mb-4 text-center text-4xl font-bold">Login</h1>
      <form onSubmit={handleLoginSubmit} className="mx-auto max-w-md">
        <input
          type="email"
          name="email"
          placeholder="your@gmail.com"
          className="my-2 w-full rounded-2xl border px-3 py-2"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="my-2 w-full rounded-2xl border px-3 py-2"
          required
        />
        <button
          type="submit"
          className="w-full rounded-2xl bg-[#564f6f] p-2 text-white"
        >
          Login
        </button>
        <div className="py-2 text-center text-gray-500">
          Don't have an account yet?{" "}
          <Link to={"/register"} className="text-black underline">
            Register Now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
