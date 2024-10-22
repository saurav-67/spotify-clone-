import React, { useEffect, useRef,useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData } from "../assets/assets";
import { assets } from "../assets/assets";
import { songsData } from "../assets/assets";

import { PlayerContext } from "../Context/PlayerContext";
const DisplayAlbum = () => {
  let bgRef = useRef();
  let { id } = useParams();
  let albums = albumsData[id];
  let {playWithId}=useContext(PlayerContext)
  useEffect(() => {
    bgRef.current.style.background = `linear-gradient( ${albums.bgColor}, #121212)`;
  });
  return (
    <div ref={bgRef} className="p-4">
      <Navbar />
      <div className="album-title w-full flex gap-3 mt-8">
        <img src={albums.image} alt="" className="w-[200px] h-[200px]" />
        <div className="details  flex justify-center items-start flex-col gap-4  font-semibold">
          <p className="text-gray-200 font-semibold">Playlist</p>
          <h1 className="text-6xl font-bold">{albums.name}</h1>
          <p className="text-gray-300">{albums.desc}</p>
          <ul className="flex items-center  gap-2 flex-wrap">
            <li className="flex gap-2 items-center">
              <img src={assets.spotify_logo} alt="" />{" "}
              <span className="font-bold">Spotify</span>
            </li>
            <li>
              {(106799).toLocaleString("en-IN")} 
              Likes
            </li>
            <li>50 songs</li>
            <li>about 2hr 30 min</li>
          </ul>
        </div>
      </div>
      <div className="w-full h-auto mt-4">
        <div className="grid grid-cols-4 gap-4 text-gray-400 font-bold">
          <p className=" flex gap-4">
            # <h2>Title</h2>
          </p>
          <p>Album</p>
          <p className="hidden sm:block">Data Added</p>
          <p>
            <img src={assets.clock_icon} alt="" className="w-[25px] h-[25px]" />
          </p>
        </div>
        <hr className="my-3" />
        {songsData.map((items, id) => {
          return (
            <div
              className=" w-full grid grid-cols-4  p-4 text-gray-300 hover:bg-[#ffffff26]  "
              key={id} onClick={() => { playWithId(id)}}
            >
              <div className="min-w-[50px] h-[30px] flex gap-2">
                {id + 1} <img src={items.image} alt="" className="gap-2" />
                <p className="text-white font-bold">{items.name}</p>
              </div>
              <p className=" font-lighter"> {albums.name}</p>
              <p className="hidden sm:block">5 days ago</p>
              <p>{items.duration}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayAlbum;
