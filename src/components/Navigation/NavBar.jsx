import React, { useState, useEffect, useContext } from "react";
import {
  XMarkIcon,
  Bars3BottomRightIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LOGO from "../../assets/logo/mobile-logo.png";
import { UserContext } from "../../context/UserContext";
import Cookies from "js-cookie";

const NavBar = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "DEALS", link: "/deals" },
    { name: "RESERVATIONS", link: "/reservations" },
    { name: "PAYMENTS", link: "/payments" },
  ];
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the menu when the location changes
  useEffect(() => {
    setOpen(false);
  }, [location]);

  const handleLogout = () => {
    Cookies.remove("token", { secure: true, sameSite: "None", path: "/" });
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="fixed left-0 top-0 z-50 w-full border-b-2 bg-[#2D283D] shadow-md">
      <div className="items-center justify-between bg-none px-7 py-4 md:flex md:px-10">
        <Link
          to="/"
          className="flex cursor-pointer items-center gap-1 text-2xl font-bold"
        >
          <img
            src={LOGO}
            alt="DriveEasy Logo"
            className="block h-12 rounded-lg bg-gray-100 md:hidden lg:block"
          />
          <span
            className={`text-white ${open ? "text-purple-400" : "text-white"}`}
          >
            DriveEasy
          </span>
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 h-7 w-7 cursor-pointer md:hidden"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        <ul
          className={`absolute left-0 z-[-1] w-full bg-gray-400 pb-12 pl-9 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:bg-transparent md:pb-0 md:pl-0 ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li key={index} className="my-7 font-semibold md:my-0 md:ml-8">
              <Link
                to={link.link}
                className={`duration-500 hover:text-[#bf8edb] ${
                  location.pathname === link.link
                    ? "text-[#802bb1]"
                    : "text-[#d1d7e0]"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {!user ? (
            <button className="btn rounded bg-[#564f6f] px-3 py-1 font-semibold text-white duration-500 hover:bg-[#802bb1] md:static md:ml-8">
              <Link to={"/login"}>Login</Link>
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="btn flex rounded px-1 py-2 font-semibold duration-500 hover:cursor-pointer md:static md:ml-8 lg:bg-[#564f6f] lg:hover:bg-[#802bb1]"
            >
              <UserIcon className="mx-4 h-8 rounded-full bg-white p-1" />
              <p className="hidden px-4 text-white lg:block">{user.userName}</p>
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
