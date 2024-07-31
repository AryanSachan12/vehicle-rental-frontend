import React from "react";
import NavBar from "../../Navigation/NavBar";
import ReservationsPage from "./ReservationsPage";

const Reservations = () => {
  return (
    <div className="h-max bg-[#2D283D]">
      <NavBar />
      <ReservationsPage />
    </div>
  );
};

export default Reservations;
