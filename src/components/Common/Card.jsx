import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faGasPump, faGear } from "@fortawesome/free-solid-svg-icons";
import BookingModal from "./BookingModal"; // Import the modal component

const Card = ({ car }) => {
  const { url, name, monthlyRate, dailyRate, extraPrice } = car;
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {}, []);

  function handleOpenBooking() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <div
        className="mx-auto h-auto w-auto w-max max-w-[400px] cursor-pointer rounded-3xl bg-[#d1d7e0] text-[#2d283D] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
        onClick={handleOpenBooking}
      >
        <img
          src={url}
          className="w-372px"
        />
        <h1 className="my-12 text-center text-3xl text-[#2d283D]">{name}</h1>
        <p className="my-2 text-center">
          <span className="text-2xl">{`Rs. ${monthlyRate}`}</span>/Monthly Rate
        </p>
        <p className="my-2 text-center">
          <span className="text-2xl">{`Rs. ${dailyRate}`}</span>/Daily Rate
        </p>
        <p className="my-2 text-center">
          <span className="text-2xl">{`Rs. ${extraPrice}`}</span>/Price per
          Extra Km
        </p>

        <div className="flex items-center justify-evenly py-8 text-black">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faUsers} className="text-[#802bb1]" />
            <p>Seats 4</p>
          </div>

          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faGasPump} className="text-[#802bb1]" />
            <p>Petrol</p>
          </div>

          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faGear} className="text-[#802bb1]" />
            <p>Manual</p>
          </div>
        </div>
      </div>

      {isModalOpen && <BookingModal car={car} onClose={handleCloseModal} />}
    </>
  );
};

export default Card;
