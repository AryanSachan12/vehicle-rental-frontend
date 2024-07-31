import axios from "axios";
import React, { useState } from "react";

const BookingModal = ({ car, onClose }) => {
  const { url, name, monthlyRate, dailyRate, extraPrice } = car;

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Get today's date in yyyy-mm-dd format
  const today = new Date().toISOString().split("T")[0];

  async function handleCarBooking(event) {
    event.preventDefault();

    if (endDate < startDate) {
      console.log("Select a valid date");
    } else {
      try {
        const response = await axios.post(
          "/bookings",
          {
            name,
            startDate,
            endDate,
          },
          { withCredentials: true },
        );
        const bookingId = response.data._id;
        alert(`Booking confirmed with id: ${bookingId}`);
      } catch (error) {
        console.error("Error making booking:", error);
      }
    }
  }

  if (!car) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      style={{ zIndex: 100 }}
    >
      <div className="flex w-auto flex-col justify-center overflow-auto rounded-lg bg-white p-8">
        <h2 className="mb-4 text-2xl">Book {name}</h2>
        <img src={url} alt={name} className="mb-4 max-w-[400px]" />
        <p>Rates:</p>
        <p>{`Monthly: Rs. ${monthlyRate}`}</p>
        <p>{`Daily: Rs. ${dailyRate}`}</p>
        <p>{`Price per Extra Km: Rs. ${extraPrice}`}0</p>

        <form onSubmit={handleCarBooking}>
          <div className="mb-4 flex flex-col">
            <label className="mb-2">Start Date:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="select-none rounded border p-2"
              required
              min={today} // Set minimum date to today
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label className="mb-2">End Date:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="rounded border p-2"
              required
              min={startDate} // Optionally, set minimum end date to start date
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
            >
              Book
            </button>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
