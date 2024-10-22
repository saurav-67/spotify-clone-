import React, { useContext } from "react";
import { songsData } from "../assets/assets";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const Album = ({ name, image, desc, id }) => {
 
  let navigate = useNavigate();
 
  return (<>
    <div onClick={(e)=>navigate(`albums/${id}`)} className="min-w-[200px] min-h-[120px] px-2 py-1 rounded-md cursor-pointer hover:bg-[#ffffff26]" id={id}>
      <img src={image} alt="" className="rounded" />
      <p className="text-slate-300 font-bold">{name}</p>
      <p className="font-thin text-white text-sm">{desc}</p>

  </div>
  </>)
}
export default Album