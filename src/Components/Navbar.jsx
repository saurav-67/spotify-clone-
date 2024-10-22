import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold text-white py-2 mt-2">
        <div className="flex items-center gap-2 ">
          <img
            src={assets.arrow_left}
            onClick={() => navigate(-1)}
            alt=""
            className="w-8 h-6 cursor-pointer"
          />
          <img
            src={assets.arrow_right}
            onClick={() => navigate(1)}
            alt=""
            className="w-8 h-6 cursor-pointer"
          />
        </div>
        <div className="explore-premium   flex gap-2   ">
          <button className="bg-white text-black rounded-xl py-1 px-2">
            Explore Premium
          </button>
          <button className="bg-black text-white rounded-xl py-1 px-2">
            Install App
          </button>
          <p className=" w-[40px] h-[40px] bg-purple-500 text-black flex justify-center items-center  rounded-full p-2">
            S
          </p>
        </div>
      </div>
      <div className="w-full flex items-center gap-4 ">
        <button className="bg-white text-black rounded-xl px-4 py-1">
          All
        </button>
        <button className="bg-black text-gray-200 rounded-xl px-4 py-1 hover:bg-[#ffffff26]  transition-bg">
          Songs
        </button>
        <button className="bg-black text-gray-200 rounded-xl px-4 py-1 hover:bg-[#ffffff26] transition-bg ">
          Podcasts
        </button>
      </div>
    </>
  );
};

export default Navbar;
