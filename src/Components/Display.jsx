import React from 'react'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import Player from './Player'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
const Display = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element:<DisplayHome/>
        },
        {
            path: "/albums/:id",
            element:<DisplayAlbum/>
        }])
  return (
      <div className="w-[100%]  h-full m-2 px-2 bg-[#121212] text-white overflow-auto">
        
          <RouterProvider router={router} />
   </div>
  )
}

export default Display