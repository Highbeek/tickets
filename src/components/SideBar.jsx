import React from "react";
import TransportList from "./TransportList";
import Booking from "./Booking";

const SideBar = () => {
  return (
    <div className="bg-blue-100 min-h-screen">
      <p className="text-blue-800 text-lg font-bold px-6 md:px-20 py-4 md:py-8">
        Tickets4U
      </p>
      <TransportList />
      <div className="text-blue-800 text-2xl md:text-4xl px-6 md:px-10 py-2 md:py-5 leading-snug">
        Best flight deals with <br />
        <span className="font-bold">Tickets4U</span>
      </div>
      <Booking />
    </div>
  );
};

export default SideBar;
