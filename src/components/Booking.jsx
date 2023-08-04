import React from "react";
import { MdFlightTakeoff, MdFlightLand, MdCalendarMonth } from "react-icons/md";
import InputLabel from "./InputLabel";

const Booking = () => {
  return (
    <div>
      <form className="flex flex-col justify-around items-center">
        {" "}
        {/* Remove h-screen class */}
        <InputLabel
          htmlFor="depart"
          icon={MdFlightTakeoff}
          placeholder="London- All Airports, England, Uk"
          label="Departure"
        />
        <InputLabel
          htmlFor="arrival"
          icon={MdFlightLand}
          placeholder="New York- All Airports, New York, USA"
          label="Arrival At"
        />
        <div className="flex justify-between w-96 items-center gap-2">
          {" "}
          <InputLabel
            htmlFor="departuredate"
            icon={MdCalendarMonth}
            placeholder="New York- All Airports, New York, USA"
            label="Departure Date"
            className="py-4"
          />
          <InputLabel
            htmlFor="returndate"
            icon={MdCalendarMonth}
            placeholder="New York- All Airports, New York, USA"
            label="Return Date"
            className="py-4"
          />
        </div>
        <button
          type="submit"
          className="bg-[#6682e3] text-white text-lg text-center w-[80%] mx-10 rounded-md py-5"
        >
          FLIGHT FLIGHT
        </button>
      </form>
    </div>
  );
};

export default Booking;
