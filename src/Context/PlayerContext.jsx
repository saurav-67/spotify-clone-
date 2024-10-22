import { createContext, useState, useRef, useEffect } from "react";
import { songsData } from "../assets/assets";
export const PlayerContext = createContext();
export const PlayerProvider = (props) => {
  let audioRef = useRef();
  let [track, setTrack] = useState(songsData[3]);
  let [playStatus, setPlayStatus] = useState(false);
  let seekBg = useRef();
  let seekBar = useRef();
  let [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    duration: {
      second: 0,
      minute: 0,
    },
  });
  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };
  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = async (id) => {
    await setTrack(songsData[id]);
    audioRef.current.play();
    setPlayStatus(true);
    };
    
    const prev = async () => {
        if (track.id > 0) {
           await  setTrack(songsData[track.id - 1]);
            await audioRef.current.play()
            setPlayStatus(true);
        }
    }
    const next = async () => {
        if (track.id <  songsData.length-1) {
           await  setTrack(songsData[track.id + 1]);
           await  audioRef.current.play()
            setPlayStatus(true);
        }
    }
  useEffect(() => {
    audioRef.current.ontimeupdate = () => {
      setTimeout(() => {
        seekBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          duration: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      }, 1000);
    };
  }, [audioRef]);
  let contextValue = {
    audioRef,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    seekBar,
    seekBg,
    play,
    pause,
      playWithId,
      prev,
    next
  };
  return (
    <>
      <PlayerContext.Provider value={contextValue}>
        {props.children}
      </PlayerContext.Provider>
    </>
  );
};
