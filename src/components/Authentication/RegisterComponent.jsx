import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const RegisterComponent = () => {
  async function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    if (data.password === data.reenterPassword) {
      delete data.reenterPassword;

      try {
        await axios.post("/register", data);
        alert("Registration Successful");
      } catch (error) {
        alert("Registration Failed");
      }
    } else {
      console.log("Passwords do not match!!!");
    }
  }

  return (
    <div className="bg-[#d1d7e0] py-4 px-4 rounded-2xl h-3/4 mt-20 overflow-auto">
      <h1 className="text-[#602882] text-[2rem]">
        DriveEasy Car Rental Pvt Ltd.
      </h1>
      <p>with our Hassle-Free Car Rentals</p>
      <h2 className="text-[#2d283d] text-[1.5rem] mb-8">Create Your Account</h2>

      <form onSubmit={handleSubmit} className="text-[#4c495d]">
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          required
          className="w-full py-1 px-2 text-black rounded-lg my-2"
        />

        <label>User Name</label>
        <input
          type="text"
          name="userName"
          required
          className="w-full py-1 px-2 text-black rounded-lg my-2"
        />

        <div className="flex gap-4">
          <div className="w-1/2">
            <label>Create Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full py-1 px-2 rounded-lg"
            />
          </div>
          <div className="w-1/2">
            <label>Re-enter Password</label>
            <input
              type="password"
              name="reenterPassword"
              required
              className="w-full py-1 px-2 rounded-lg"
            />
          </div>
        </div>

        <label>Driving License Number</label>
        <input
          type="text"
          name="drivingLicenseNumber"
          required
          className="w-full py-1 px-2 text-black rounded-lg my-2"
        />

        <label>Address</label>
        <input
          type="text"
          name="address"
          required
          className="w-full py-1 px-2 text-black rounded-lg my-2"
        />

        <div className="flex gap-4">
          <div className="w-1/2">
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full py-1 px-2 rounded-lg"
            />
          </div>
          <div className="w-1/2">
            <label>Contact Number</label>
            <input
              type="tel"
              name="contactNumber"
              maxLength={10}
              required
              className="w-full py-1 px-2 rounded-lg"
            />
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button
            type="submit"
            className="bg-[#564f6f] text-white p-2 rounded-xl"
          >
            Submit
          </button>
          <Link to="/login">
            <button type="button">Go Back to Login</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterComponent;
