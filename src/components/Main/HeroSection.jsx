import React from "react";

import HERO_IMG from "../../assets/hero.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex h-screen w-full flex-row">
      <div className="align-center flex w-full flex-col justify-center px-20 py-20 sm:w-1/2">
        <h1 className="z-10 text-[3rem] text-[#d1d7d0] md:text-[6rem] xl:text-[6rem]">
          Navigate Life's Highways
        </h1>
        <h2 className="text-[1rem] text-white md:text-[2rem] xl:text-[3rem]">
          <span className="mr-4 text-xl text-[#d1d7d0] md:text-2xl">
            with our
          </span>
          Hassle-Free
        </h2>
        <p className="text-4xl text-[#d1d7d0]">Car Rentals</p>
        <hr />
        <div className="mt-4 flex justify-between">
          <Link
            to="/deals"
            className="rounded-lg bg-[#802bb1] p-2 font-bold text-[#d1d7d0]"
          >
            Find a Car -&gt;
          </Link>
          <Link className="rounded-lg p-2 font-bold text-[#d1d7d0]">
            Learn More -&gt;
          </Link>
        </div>
      </div>
      <div className="flex hidden max-h-screen items-center justify-center overflow-hidden py-20 sm:block sm:w-1/2">
        <img
          src={HERO_IMG}
          alt="Hero"
          className="h-auto w-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default HeroSection;
