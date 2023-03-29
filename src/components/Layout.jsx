import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'

export const layoutloader = () => {
    return "Layout loading"
}


const Layout = () => {
  return (
    <div className='layout'>
        <Navbar />
        <div className="outlet">
            <Outlet />
        </div>
    </div>
  )
}

export default Layout