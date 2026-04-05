import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center justify-between py-4 px-[4%] bg-white border-b border-gray-200'>
        <div className='flex items-center gap-2'>
            <h1 className='text-xl font-serif uppercase tracking-wider'>Urban Loom</h1>
            <span className='text-xs text-gray-500 font-bold uppercase tracking-widest border border-gray-200 px-2 py-0.5 rounded-full'>Admin</span>
        </div>
        <button onClick={()=>setToken('')} className='bg-black text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors rounded-sm'>Logout</button>
    </div>
  )
}

export default Navbar