import React from "react";
import SideBar from "../components/SideBar";
import MainPage from "../components/MainPage";

const Home = () => {
  return (
    <div className="flex h-screen">
      <div className="w-2/5 bg-[#f3f6fd]">
        <SideBar />
      </div>
      <div className="flex-1 p-4 bg-[#e9f0f8]">
        <MainPage />
      </div>
    </div>
  );
};

export default Home;
