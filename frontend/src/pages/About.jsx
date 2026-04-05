import React from 'react'
import NewsletterBox from '../components/NewsletterBox'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='pt-32 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] min-h-screen'>
      
      <div className='flex flex-col md:flex-row gap-16 mb-32'>
        <div className='w-full md:w-1/2'>
            <h1 className='text-5xl md:text-7xl font-serif mb-8 leading-tight'>
                Weaving Stories <br/> Into Fabric
            </h1>
            <p className='text-lg font-light leading-relaxed text-gray-800 mb-8'>
                Urban Loom was born from a desire to redefine everyday luxury. We believe that what you wear is an extension of your identity—a canvas for self-expression.
            </p>
            <p className='text-gray-500 font-light leading-relaxed mb-8'>
                Our journey began with a simple idea: to create clothing that is both timeless and contemporary. We source the finest materials and work with skilled artisans to bring you pieces that are not only beautiful but also built to last.
            </p>
            <div className='flex gap-8'>
                <div>
                    <h3 className='text-4xl font-serif mb-2'>10k+</h3>
                    <p className='text-xs font-bold uppercase tracking-widest text-gray-400'>Happy Customers</p>
                </div>
                <div>
                    <h3 className='text-4xl font-serif mb-2'>150+</h3>
                    <p className='text-xs font-bold uppercase tracking-widest text-gray-400'>Original Designs</p>
                </div>
            </div>
        </div>
        
        <div className='w-full md:w-1/2 h-[600px] bg-gray-100 relative overflow-hidden'>
            <img className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100' src={assets.about_img} alt="About" />
        </div>
      </div>

      <div className='mb-32'>
        <h2 className='text-4xl font-serif mb-16 text-center'>Why Choose Us</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='border border-gray-100 p-12 hover:bg-black hover:text-white transition-all duration-500 group'>
                <h3 className='text-xl font-serif mb-4'>Quality Assurance</h3>
                <p className='text-gray-500 font-light group-hover:text-gray-300 transition-colors'>
                    Every stitch is inspected. We maintain rigorous standards to ensure that every piece meets our definition of perfection.
                </p>
            </div>
            <div className='border border-gray-100 p-12 hover:bg-black hover:text-white transition-all duration-500 group'>
                <h3 className='text-xl font-serif mb-4'>Convenience</h3>
                <p className='text-gray-500 font-light group-hover:text-gray-300 transition-colors'>
                    Seamless shopping experience, from browsing to unboxing. We value your time as much as you do.
                </p>
            </div>
            <div className='border border-gray-100 p-12 hover:bg-black hover:text-white transition-all duration-500 group'>
                <h3 className='text-xl font-serif mb-4'>Exceptional Service</h3>
                <p className='text-gray-500 font-light group-hover:text-gray-300 transition-colors'>
                    Our team is dedicated to your satisfaction. We are here to ensure your Urban Loom experience is flawless.
                </p>
            </div>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About