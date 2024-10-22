import React, { useContext } from 'react'
import { PlayerContext } from '../Context/PlayerContext'
const Songitems = ({ name, image, id, desc }) => {
  const { playWithId } = useContext(PlayerContext);
  return (
    <div onClick={ ()=> playWithId(id)} className=" min-w-[200px] min-h-[200px] songItems  p-2 cursor-pointer hover:bg-[#ffffff26]">
          <img src={image} alt="" className='rounded-md' />
          <p className='font-bold text-slate-400'> {name}</p>
          <p className='font-thin'>{desc}</p>
   </div>
  )
}

export default Songitems