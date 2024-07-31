import React from "react";

import GUY_SALES from "../../../assets/about/salesman.jpg";

import FACEBOOK_ICON from "/assets/social/facebook.png";
import INSTAGRAM_ICON from "/assets/social/instagram.png";
import WHATSAPP_ICON from "/assets/social/whatsapp.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const AboutPage = () => {
  return (
    <div className="bg-[#d1d7e0] flex h-max p-12 gap-4 flex-col md:flex-row">
      <div className="w-1/2 gap-12 h-auto hidden md:flex">
        <div className="flex flex-col w-max">
          <div className="bg-[url('/assets/about/salesgirl.jpg')] h-1/2 w-full bg-contain bg-no-repeat rounded-xl"></div>
          <div className="h-1/2 w-full bg-[#2d283d] rounded-xl p-6 h-max">
            <h1 className="text-white text-[4rem]">5+</h1>
            <p className="text-gray-400">Years of Experience</p>
          </div>
        </div>
        <div className="w-1/2 min-h-max">
          <img src={GUY_SALES} alt="guy in car sales" className="rounded-lg" />
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <h1 className="text-[#2d283d] font-bold text-[4rem]">About Us</h1>
        <p className="text-[1.5rem] font-light">
          At <span className="text-[#2d283d] text-[2rem]">DriveEasy</span>,
          we've embraced innovation to make your car rental journey effortless.
          As a registered user, enjoy the simplicity of browsing through our
          diverse fleet, selecting your preferred car, and specifying pick-up
          details - all at your fingertips
        </p>

        <h1 className="text-[#2d283d] font-semibold mt-4">
          Why Choose Easy Car Rental?
        </h1>
        <div className="flex justify-between mt-2 text-2xl mb-6">
          <ul className="text-[#2d283d] font-bold">
            <li className="mt-2">User-Friendly Online Registration</li>
            <li className="mt-2">Secure Document Upload</li>
            <li className="mt-2">Random Driver Assignment</li>
          </ul>
          <ul className="text-[#2d283d] font-bold">
            <li className="mt-2">Swift Payment Process</li>
            <li className="mt-2">Flexible Booking</li>
            <li className="mt-2">Transparent Return Process</li>
          </ul>
        </div>
        <p>
          At DriveEasy, we prioritize your comfort and aim to redefine your car
          rental experience. Join us in embracing a new era of convenience and
          relability in every journey you take.
        </p>
        <div className="flex justify-between mt-2">
          <div className="flex gap-2">
            <a href="">
              <img src={FACEBOOK_ICON} alt="" className="w-6" />
            </a>
            <a href="">
              <img src={INSTAGRAM_ICON} alt="" className="w-6" />
            </a>
            <a href="">
              <img src={WHATSAPP_ICON} alt="" className="w-6" />
            </a>
          </div>

          <button>More About Us -&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
