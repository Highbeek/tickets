import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import Airways from "./Airways";

const MainPage = () => {
  return (
    <div className="bg-[#e9f0f8] h-[100%]">
      <div className="flex justify-between items-center px-5  pt-8">
        <div>
          <p className="text-[#636E8C] text-2xl font-semibold">Search results</p>
          <p className="text-blue-200">We found 15 results</p>
        </div>
        <div className="px-5">
          <button className="text-gray-500 bg-white mr-2 text-xs px-3 py-2 rounded-3xl w-32 font-semibold">
            CHEAPEST
          </button>
          <button className="text-gray-500 bg-white mr-2 text-xs px-3 py-2 rounded-3xl w-32 font-semibold">
            SHORTEST
          </button>
          <button className="text-white bg-blue-400 mr-2 text-xs px-3 py-2 rounded-2xl w-32 font-semibold">
            RECOMMENDED
          </button>
        </div>
      </div>
      <div className="flex items-center gap-5 my-8 px-5">
        <p className="text-blue-500 font-semibold text-3xl">London</p>{" "}
        <FiArrowRight color="gray" size={28} />{" "}
        <p className="text-blue-500 font-semibold text-3xl">New York</p>
      </div>
      <Airways />
      <div className="flex flex-row items-center gap-3 my-10  mx-10 cursor-pointer">
        <span className="bg-white w-8 h-8 rounded-md flex items-center justify-center">
          <AiOutlineLeft color="gray" />
        </span>
        <p className="bg-blue-400 w-8 h-8 rounded-md text-white flex items-center justify-center">
          1
        </p>
        <p className="bg-blue-400 w-8 h-8 rounded-md text-white flex items-center justify-center">
          2
        </p>
        <p className="bg-blue-400 w-8 h-8 rounded-md text-white flex items-center justify-center">
          3
        </p>

        <span className="bg-white w-8 h-8 rounded-md flex items-center justify-center">
          <AiOutlineRight color="gray" />
        </span>
      </div>
    </div>
  );
};

export default MainPage;
