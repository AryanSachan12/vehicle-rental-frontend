import "./App.css";

import React, { useContext, useEffect } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/Main/MainPage";
import About from "./components/Routes/About/About";
import Deals from "./components/Routes/Deals/Deals";
import Reservations from "./components/Routes/Reservations/Reservations";
import Payments from "./components/Routes/Payments/Payments";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import axios from "axios";
import { UserContext, UserContextProvider } from "./context/UserContext";

axios.defaults.baseURL = "https://vehicle-rental-backend-2-zoh5.onrender.com";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/deals",
        element: <Deals />,
      },
      {
        path: "/reservations",
        element: <Reservations />,
      },
      {
        path: "/payments",
        element: <Payments />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserContextProvider>
  );
}

export default App;
