import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-white border-t border-gray-100 mt-32'>
      <div className='container-custom flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-16 text-sm'>

        <div>
            <h2 className='text-xl font-serif mb-5 uppercase tracking-wider'>Sauda</h2>
            <p className='w-full md:w-2/3 text-gray-600 leading-relaxed font-light'>
            We are a collective of designers and makers dedicated to creating timeless pieces that transcend seasons. Our commitment to quality and sustainability is at the heart of everything we do.
            </p>
        </div>

        <div>
            <p className='text-sm font-bold uppercase tracking-widest mb-5'>Company</p>
            <ul className='flex flex-col gap-2 text-gray-600 font-light'>
                <li className='hover:text-black cursor-pointer transition-colors'>Home</li>
                <li className='hover:text-black cursor-pointer transition-colors'>About us</li>
                <li className='hover:text-black cursor-pointer transition-colors'>Delivery</li>
                <li className='hover:text-black cursor-pointer transition-colors'>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-sm font-bold uppercase tracking-widest mb-5'>Get in Touch</p>
            <ul className='flex flex-col gap-2 text-gray-600 font-light'>
                <li className='hover:text-black cursor-pointer transition-colors'>+92 3299190021</li>
                <li className='hover:text-black cursor-pointer transition-colors'>sauda@gmail.com</li>
            </ul>
        </div>

      </div>

      <div className='container-custom'>
          <hr className='border-gray-100' />
          <p className='py-5 text-xs text-center text-gray-400 font-light'>Copyright 2026@ sauda.com - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer