import React from "react";
import TransportList from "./TransportList";
import Booking from "./Booking";

const SideBar = () => {
  return (
    <div className="bg-blue-100 min-h-screen">
      <p className="text-blue-800 text-lg font-bold px-20 py-8">Tickets4U</p>
      <TransportList />
      <p className="text-blue-800 text-4xl px-10 py-5 leading-snug">
        Best flight deals with <br />{" "}
        <span className="font-bold">Tickets4U</span>
      </p>
      <Booking />
    </div>
  );
};

export default SideBar;
