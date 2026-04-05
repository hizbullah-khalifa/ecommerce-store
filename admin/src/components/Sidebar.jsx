import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r border-gray-200 bg-white pt-10'>
        <div className='flex flex-col gap-2 pl-[10%]'>
            
            <NavLink className={({isActive})=> `flex items-center gap-3 px-4 py-3 rounded-l-sm transition-all duration-200 ${isActive ? 'bg-gray-50 border-r-4 border-black' : 'hover:bg-gray-50'}`} to="/add">
                <img className='w-5 h-5 opacity-70' src={assets.add_icon} alt="" />
                <p className='hidden md:block text-sm font-medium text-gray-700 uppercase tracking-wide'>Add Items</p>
            </NavLink>

            <NavLink className={({isActive})=> `flex items-center gap-3 px-4 py-3 rounded-l-sm transition-all duration-200 ${isActive ? 'bg-gray-50 border-r-4 border-black' : 'hover:bg-gray-50'}`} to="/list">
                <img className='w-5 h-5 opacity-70' src={assets.order_icon} alt="" />
                <p className='hidden md:block text-sm font-medium text-gray-700 uppercase tracking-wide'>List Items</p>
            </NavLink>

            <NavLink className={({isActive})=> `flex items-center gap-3 px-4 py-3 rounded-l-sm transition-all duration-200 ${isActive ? 'bg-gray-50 border-r-4 border-black' : 'hover:bg-gray-50'}`} to="/orders">
                <img className='w-5 h-5 opacity-70' src={assets.order_icon} alt="" />
                <p className='hidden md:block text-sm font-medium text-gray-700 uppercase tracking-wide'>Orders</p>
            </NavLink>

        </div>
    </div>
  )
}

export default Sidebar