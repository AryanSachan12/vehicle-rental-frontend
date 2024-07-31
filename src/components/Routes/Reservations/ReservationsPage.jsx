import axios from "axios";
import React, { useEffect, useState } from "react";

const ReservationsPage = () => {
  const [userBookings, setUserBookings] = useState([]);

  useEffect(() => {
    async function fetchMyBookings() {
      try {
        const response = await axios.get("/bookings", {
          withCredentials: true,
        });
        setUserBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setUserBookings([]);
      }
    }

    fetchMyBookings();
  }, []);

  return (
    <div className="bg-[#d1d7e0] p-8">
      <h1 className="py-4 text-4xl font-bold">Your Bookings</h1>
      {userBookings.length > 0 ? (
        <div>
          {userBookings.map((booking, index) => {
            return (
              <div key={index}>
                <p className="my-4 text-3xl">{`${index+1}) ${booking.name}`}</p>
                <p>{`Start Date: ${booking.startDate}`}</p>
                <p>{`End Date: ${booking.endDate}`}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <p className="text-2xl mt-6">No bookings found</p>
        </div>
      )}
    </div>
  );
};

export default ReservationsPage;
