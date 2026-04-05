import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 bg-[#fcfcfc] mt-20'>
        <div className='hover:-translate-y-2 transition-transform duration-300'>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5 opacity-80' alt="Exchange" />
            <p className='font-semibold uppercase tracking-wide mb-2'>Easy Exchange</p>
            <p className='text-gray-400'>Hassle-free exchange policy</p>
        </div>
        <div className='hover:-translate-y-2 transition-transform duration-300'>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5 opacity-80' alt="Quality" />
            <p className='font-semibold uppercase tracking-wide mb-2'>7 Days Return</p>
            <p className='text-gray-400'>7-day free return policy</p>
        </div>
        <div className='hover:-translate-y-2 transition-transform duration-300'>
            <img src={assets.support_img} className='w-12 m-auto mb-5 opacity-80' alt="Support" />
            <p className='font-semibold uppercase tracking-wide mb-2'>Best Support</p>
            <p className='text-gray-400'>24/7 customer support</p>
        </div>
    </div>
  )
}

export default OurPolicy