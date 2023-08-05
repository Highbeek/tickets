// eslint-disable-next-line no-unused-vars
import React from "react";
import { airWays } from "../constants/index";
import { BsThreeDots } from "react-icons/bs";

const Airways = () => {
  return (
    <div className="flex flex-col mx-8">
      {airWays.map(
        ({ id, img, time, stops, hour, mins, arrivalTime, price }) => (
          <div
            key={id}
            className="flex justify-around bg-white border p-3 m-2 rounded-xl shadow-xl"
          >
            <img src={img} alt="" className="w-20 object-cover" />
            <div>
              <p className="text-gray-300">Depart</p>
              <p className="text-gray-500">11/11/2019</p>
              <p className="text-gray-500 font-semibold">{time}</p>
            </div>
            <div className="flex items-center">
              <BsThreeDots color="gray" />
              <div className="flex flex-col items-center pt-4">
                <button
                  className={`text-center rounded-2xl px-3 text-sm py-1 text-white ${
                    stops > 0 ? "bg-red-600" : "bg-gray-600"
                  }`}
                >
                  {stops} Stops
                </button>
                <p className="text-gray-400 text-sm">
                  {hour} hours {mins} mins
                </p>
              </div>
              <BsThreeDots color="gray" />
            </div>

            <div>
              <p className="text-gray-300">Arrive</p>
              <p className="text-gray-500">12/11/2019</p>
              <p className="text-gray-500 font-semibold"> {arrivalTime}</p>
            </div>
            <div>
              <p className="text-gray-300">Price</p>
              <p className="text-gray-500 font-bold text-xl">$ {price} </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Airways;
