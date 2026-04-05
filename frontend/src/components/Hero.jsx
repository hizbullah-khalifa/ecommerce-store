import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='w-full h-[85vh] relative flex items-center justify-center overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0'>
            <img 
                className='w-full h-full object-cover' 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
                alt="Hero Background" 
            />
            {/* Subtle Overlay for Text Readability */}
            <div className='absolute inset-0 bg-black/20'></div>
        </div>

        {/* Content */}
        <div className='relative z-10 text-center text-white px-4 max-w-4xl mx-auto fade-in'>
            <p className='text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-4'>
                Spring / Summer 2026
            </p>
            <h1 className='text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight'>
                Timeless Elegance
            </h1>
            <p className='text-lg md:text-xl font-light tracking-wide mb-10 max-w-2xl mx-auto opacity-90'>
                Discover our curated collection of sustainable essentials designed for the modern individual.
            </p>
            
            <div className='flex gap-6 justify-center'>
                <a href="#collection" className='bg-white text-black px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300'>
                    Shop Collection
                </a>
                <a href="/about" className='border border-white text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300'>
                    Our Story
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero