import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  let navigate=useNavigate()
  return (
    <div className="left-sideabar w-30% h-full  bg-black flex justify-center items-center flex-col gap-2 rounded-md text-white font-bold ">
      <div className="home w-[90%] h-[15%] bg-[#121212] text-white p-2 flex justify-center items-start flex-col gap-2 font-bold mt-4 pl-4 rounded-md">
        <div className="assets flex gap-3  " >
          <img src={assets.home_icon} alt="" className="w-8" onClick={() =>{navigate("/")}}/>
          <h1>Home</h1>
        </div>
        <div className="assets flex gap-3"  >
          <img src={assets.search_icon} alt="" className="w-8" />
          <h1>Search</h1>
        </div>
      </div>
      <div className="home-second w-[90%] h-[98%]  bg-[#121212] p-2 flex gap-2 flex-col rounded-md   ">
        <div className="library w-full flex justify-between mt-2 b p-2">
          <div className="icon flex gap-2 items-center">
            <img src={assets.stack_icon} alt="" className="w-8" />
            <h1>Your library</h1>
          </div>
          <div className="back-icon flex gap-2">
            <img src={assets.arrow_icon} alt="" className="w-4 h-6" />
            <img src={assets.plus_icon} alt="" className="w-6 h-6" />
          </div>
        </div>
        <div className="playlist w-full min-h-30 bg-[#242424] flex justify-start items-start  flex-col gap-2 px-2 py-3  rounded-md">
          <h1 className="font-bold text-lg">Create your playlist</h1>
          <p className="text-gray-200 font-extralight">
            it's easy we'll help you
          </p>
          <button className="font-semibold bg-white text-black rounded-full px-3 py-2 text-sm mt-2 ">
            Create playlist
          </button>
        </div>
        <div className="let-find w-full min-h-30 bg-[#242424] flex justify-start items-start  flex-col gap-2 px-2 py-3  rounded-md">
          <h1 className="font-bold text-sm">
            Let's find some podtcasts to follow
          </h1>
          <p className="text-gray-200 font-extralight">
            {" "}
            we'll keep you updated on new episode help you
          </p>
          <button className="font-semibold bg-white text-black rounded-full px-3 py-2 text-sm mt-2 ">
            Browser Podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
