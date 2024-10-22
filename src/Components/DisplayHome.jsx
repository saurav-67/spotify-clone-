import {useEffect,useRef} from 'react'
import Navbar from './Navbar'
import Album from "./Album"
import Songitems from './Songitems'
import { albumsData } from '../assets/assets'
import { songsData } from '../assets/assets'
const DisplayHome = () => {
    let albumRef = useRef();
    let songItemsRef = useRef();
    function scrollBox(e) {
        console.log("saurav singh")
        albumRef.current.scrollLeft+=e.deltaY
       
    }
    function scrollBoxTwo(e) {
        songItemsRef.current.scrollLeft += e.deltaY;
       
    }
    useEffect(() => {
        let album = albumRef.current;
        let song=songItemsRef.current
        album.addEventListener("wheel", (e) => scrollBox(e));
        song.addEventListener("wheel",(e)=>scrollBoxTwo(e))
    },[])
    return (
        <div className='display-box'>
            <Navbar />
            <div className="my-5 font-bold  ">
                <h1 className='text-white text-2xl' >Charts</h1>
                <div className="top-albums  flex overflow-x-auto my-2" ref={albumRef} >
                {albumsData.map((items, id) => {
                    return (
                        <Album key={id} name={items.name} image={items.image} id={items.id} desc={items.desc}/>
                    )
                })}
                </div>
            

            </div>
            <div className="my-5 font-bold  ">
                <h1 className='text-white text-2xl'>Today hit's</h1>
                <div className="top-albums  flex overflow-x-auto my-2" ref={songItemsRef}>
                {songsData.map((items, id) => {
                    return (
                        <Songitems key={id} name={items.name} image={items.image} id={items.id} desc={items.desc}/>
                    )
                })}
                </div>
            

            </div>
        </div>
  )
}

export default DisplayHome