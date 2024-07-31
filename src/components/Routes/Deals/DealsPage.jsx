import React, { useEffect, useState } from "react";
import Card from "../../Common/Card";
import axios from "axios";

const DealsPage = () => {
  const [listingData, setListingData] = useState([]);

  useEffect(() => {
    async function findCars() {
      const { data } = await axios.get("/listings");
      setListingData(data)
    }
    findCars();
  }, []);

  return (
    <div className="bg-[#d1d7e0] px-12 py-4">
      <div>
        <h1 className="mt-8 text-3xl font-bold text-[#26242e]">General Cars</h1>
        <p className="my-4 text-xl">
          Explore our diverse fleet of reliable and comfortable general cars,
          perfect for every journey. From compact efficiency to spacious
          convenience, find the ideal ride for your travel needs.
        </p>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {listingData.map((car, index) => {
            if (car.type === "general") {
              return <Card car={car} key={index} />;
            }
          })}
        </div>
      </div>

      <div>
        <h1 className="my-2 py-4 text-3xl font-bold text-[#26242e]">
          Premium Cars
        </h1>
        <p className="my-4 text-xl">
          Elevate your travel experience with our exclusive fleet of premium
          cars. From luxurious sedans to high-performance SUVs, explore the
          epitome of comfort and style for an unforgettable journey.
        </p>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {listingData.map((car, index) => {
            if (car.type === "premium") {
              return <Card car={car} key={index} />;
            }
          })}
        </div>
      </div>

      <div>
        <h1 className="my-2 py-4 text-3xl font-bold text-[#26242e]">
          Luxury Cars
        </h1>
        <p className="my-4 text-xl">
          Indulge in Opulence: Explore Our Fleet of Exquisite Luxury Cars.
          Elevate Your Travel Experience with Unparalleled Comfort and Style.
        </p>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {listingData.map((car, index) => {
            if (car.type === "luxury") {
              return <Card car={car} key={index} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default DealsPage;
