import React from "react";
import SideBar from "../components/SideBar";
import MainPage from "../components/MainPage";

const Home = () => {
  return (
    <div className="flex flex-col h-[100%] md:flex-row">
      <div className="w-full md:w-2/5 bg-[#f3f6fd] md:h-screen">
        <SideBar />
      </div>

      <div className="flex-1">
        <MainPage />
      </div>
    </div>
  );
};

export default Home;
