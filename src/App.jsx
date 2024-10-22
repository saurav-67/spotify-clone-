import { useState,useRef, useContext } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Sidebar from "./Components/Sidebar";
import Player from "./Components/Player";
import Album from "./Components/Album";
import Display from './Components/Display';
import './App.css'
import { PlayerContext } from './Context/PlayerContext';
function App() {
  const [count, setCount] = useState(0)
  const { audioRef,track } = useContext(PlayerContext);
  
  return (
    <>
      <div className='w-full h-screen  bg-black'>
        <div className='w-full  h-[90%] bg-black  flex justify-center  gap-2'>
          <Sidebar />
          <Display/>
        </div>
        <Player />
        <audio preload='auto' ref={audioRef} src={track.file}> </audio>
    </div>
 
    </>
  )
}

export default App
