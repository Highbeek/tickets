import React, { useState } from "react";
import {
  BsFillAirplaneFill,
  BsFillTrainFrontFill,
  BsFillCarFrontFill,
} from "react-icons/bs";
import { RiShipFill } from "react-icons/ri";

const transport = [
  { id: 1, type: "Flight", icon: <BsFillAirplaneFill color="gray" /> },
  { id: 2, type: "Trains", icon: <BsFillTrainFrontFill color="gray" /> },
  { id: 3, type: "Ship", icon: <RiShipFill color="gray" /> },
  { id: 4, type: "Cars", icon: <BsFillCarFrontFill color="gray" /> },
];

const TransportList = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="py-5">
      <ul className="flex justify-between">
        {transport.map((item) => (
          <li
            key={item.id}
            className={`flex flex-col items-center px-12 py-4 cursor-pointer md:justify-around ${
              activeTab === item.id ? "bg-[#74c684] text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab(item.id)}
          >
            <div>
              {React.cloneElement(item.icon, {
                color: activeTab === item.id ? "#ffffff" : "gray",
              })}
            </div>
            <p className="mt-3 pb-2 font-semibold">{item.type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransportList;
