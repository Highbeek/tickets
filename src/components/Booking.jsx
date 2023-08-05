import React from "react";
import { MdFlightTakeoff, MdFlightLand, MdCalendarMonth } from "react-icons/md";
import InputLabel from "./InputLabel";
import { FaCoins } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import Select, { components } from "react-select";
import { TbSelector } from "react-icons/tb";

const Booking = () => {
  const classOptions = [
    { value: "Economy", label: "Economy" },
    { value: "firstClass", label: "First Class" },
  ];

  const passengerOptions = [{ value: "2", label: "1" }];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      "&:hover": { borderColor: "none" },
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: 0,
    }),
    menu: (provided) => ({
      ...provided,
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    }),
  };

  return (
    <div>
      <form className="flex flex-col items-center h-screen">
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
        <div className="flex flex-row justify-center items-center gap-10">
          <InputLabel
            htmlFor="departuredate"
            icon={MdCalendarMonth}
            placeholder="11/11/2019"
            label="Departure Date"
            className="w-36 py-4 text-center font-bold bg-gray-100"
          />
          <InputLabel
            htmlFor="returndate"
            icon={MdCalendarMonth}
            placeholder="30/11/2019"
            label="Return Date"
            className="w-36 py-4 text-center font-bold bg-gray-100"
          />
        </div>
        <div className="flex flex-row  items-center  mb-10 gap-10 mx-5">
          <div className="flex-grow w-48">
            <label htmlFor="classes" className="text-gray-500 text-semibold">
              Classes
            </label>
            <div className="flex flex-row justify-between items-center bg-white py-2 rounded-md px-2 placeholder:font-semibold">
              <FaCoins />
              <Select
                id="classes"
                options={classOptions}
                placeholder="Economy"
                components={{ DropdownIndicator }}
                styles={customStyles}
              />
            </div>
          </div>

          <div className="flex-grow w-36">
            <label htmlFor="passenger" className="text-gray-500 text-semibold">
              Passenger
            </label>
            <div className="flex flex-row justify-between items-center bg-white py-2 rounded-md px-2">
              <IoMdPerson />
              <Select
                id="passenger"
                options={passengerOptions}
                placeholder="2"
                components={{ DropdownIndicator }}
                styles={customStyles}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#6682e3] text-white text-lg text-center w-[80%] mx-10 rounded-md py-5 font-semibold"
        >
          FIND FLIGHT
        </button>
      </form>
    </div>
  );
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <TbSelector />
    </components.DropdownIndicator>
  );
};

export default Booking;
