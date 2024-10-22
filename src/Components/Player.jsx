import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { songsData } from "../assets/assets";
import { PlayerContext } from "../Context/PlayerContext";
const Player = () => {
  const { playStatus,setPlayStatus,time,setTime,seekBar,seekBg,track,setTrack,play,pause,playWithId,prev,next } = useContext(PlayerContext)
  return (
    <div className="player w-[100%]  bg-black  flex justify-between items-center px-5 text-white py-3">
      <div className="current-song flex gap-2">
        <div className="song-img">
          <img src={track.image} alt="" className="w-8 h-8" />
        </div>
        <div className="song-title flex gap-2 flex-col">
          <p className="">{track.name}</p>
          <p className="">{track.desc.slice(0, 11)}</p>
        </div>
      </div>
      <div className="controls flex justify-center items-center flex-col gap-2 w-[45%] ">
        <div className="controls-icons flex gap-4">
          <img src={assets.shuffle_icon} alt="" className="w-5 h-5" />
          <img onClick={prev} src={assets.prev_icon} alt="" className="w-5 h-5" />
          {playStatus?<img onClick={pause} src={assets.pause_icon} alt="" className="w-5 h-5" />:<img onClick={play} src={assets.play_icon} alt="" className="w-5 h-5" />
        }
        
          <img onClick={next} src={assets.next_icon} alt="" className="w-5 h-5" />
          <img src={assets.loop_icon} alt="" className="w-5 h-5" />
        </div>
        <div className="song-duration flex  jsutify-center items-center gap-2 w-[100%]">
          <h1>{time.currentTime.minute}:{time.currentTime.second}</h1>
          <div className="song-seekbg w-[100%] h-1 bg-white flex  items-center" ref={seekBg}>
            <span className=" h-full bg-green-600" ref={seekBar}></span>
          </div>
          <h1>{time.duration.minute}:{time.duration.second}</h1>
        </div>
      </div>
      <div className="more-controls    hidden items-center gap-2 sm:flex lg:flex">
        <img src={assets.plays_icon} alt="" className="w-5 h-5" />
        <img src={assets.mic_icon} alt="" className="w-5 h-5" />
        <img src={assets.queue_icon} alt="" className="w-5 h-5" />
        <img src={assets.speaker_icon} alt="" className="w-5 h-5" />
        <img src={assets.volume_icon} alt="" className="w-5 h-5" />
        <div className="line w-16 h-1 bg-white rounded-md "></div>
        <img src={assets.zoom_icon} alt="" className="w-5 h-5" />
      </div>
    </div>
  );
};

export default Player;
