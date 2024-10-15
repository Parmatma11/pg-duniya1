"use client";

import Link from "next/link";
import Hotel from "./Hotel";
import tilaknagar from "./tilaknagar";

import { useState } from "react";

const Header3 = () => {
  const [city, setCity] = useState(" ");
  const handleSearch = () => {
    const allowedCities = [
      "Guru Tegh Bahadur Institute Of Technology",
      "Tilak Nagar",
      "Hari Nagar",
      "Rajouri Garden",
    ];

    if (allowedCities.includes(city)) {
      // Proceed with the search
      if(city === 'Guru Tegh Bahadur Institute Of Technology'){
        window.location.href = `/guruteghbahadur?city=${city}`;
        alert("GTBIT")

      }else if(city === 'Tilak Nagar'){
        window.location.href = `/tilaknagar?city=${city}`;
        alert("TILAK NAGAR")
      }
      else if(city === 'Hari Nagar'){
        window.location.href = `/harinagar?city=${city}`;
        alert("HARI NAGAR")
      }
      else{
        window.location.href = `/rajourigarden?city=${city}`;
        alert("RAJOURI")
      }
    } else {
      // Show an alert if the city is not available
      alert("Data is not available right now");
    }
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        handleSearch(); // Trigger search on Enter key press
      }
    }
  };
  return (
    <div className=" bg-gradient-to-r from-red-600 to-red-400 h-60">
      <div className=" p-5">
        <h2 className=" text-4xl text-white text-center font-bold">
          Best Place To Find PG's Near Your College/Office
        </h2>
        <div className="flex justify-center my-5 mx-20">
      <input
        type="text"
        placeholder="Search..."
        className="w-6/12 h-16 outline-none px-3 text-lg border-r-2 border-gray-400"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      

      <button
        type="submit"
        className="h-16 px-3 py-2 w-72 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white text-xl "
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
        <div className="flex mx-20 my-5 font-bold">
          {/*<button
            type="submit"
            className=" h-16 px-3 py-2 hover:cursor-pointer text-white mr-5"
          >
            Continue your search
          </button>
          <button
            type="submit"
            className=" h-16 px-3 py-2 hover:cursor-pointer border-2 border-white text-white mr-5 hover:bg-gray-500 rounded-xl"
          >
            Homestay in India hotels
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Header3;
