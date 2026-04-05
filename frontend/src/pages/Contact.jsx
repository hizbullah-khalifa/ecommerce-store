import React from 'react'
import NewsletterBox from '../components/NewsletterBox'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='pt-32 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] min-h-screen'>
      
      <div className='text-center mb-20'>
        <h1 className='text-5xl md:text-7xl font-serif mb-4'>Get in Touch</h1>
        <p className='text-gray-400 font-light max-w-xl mx-auto'>
            We are here to assist you. Reach out for inquiries, collaborations, or just to say hello.
        </p>
      </div>

      <div className='flex flex-col md:flex-row gap-16 mb-32'>
        <div className='w-full md:w-1/2 h-[500px] bg-gray-100 relative overflow-hidden group'>
            <img className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700' src={assets.contact_img} alt="Contact" />
        </div>
        
        <div className='w-full md:w-1/2 flex flex-col justify-center gap-12'>
            <div>
                <h3 className='text-2xl font-serif mb-4'>Our Studio</h3>
                <p className='text-gray-500 font-light leading-relaxed'>
                    54709 Chain Market <br/>
                    Dir Lower 350, Kpk, Pakistan
                </p>
            </div>
            
            <div>
                <h3 className='text-2xl font-serif mb-4'>Contact Info</h3>
                <p className='text-gray-500 font-light leading-relaxed'>
                    Tel: +92 3299190021 <br/>
                    Email: sauda@gmail.com
                </p>
            </div>

            <div>
                <h3 className='text-2xl font-serif mb-4'>Careers</h3>
                <p className='text-gray-500 font-light leading-relaxed mb-6'>
                    Join our team of visionaries.
                </p>
                <button className='border border-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all'>
                    Explore Jobs
                </button>
            </div>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact