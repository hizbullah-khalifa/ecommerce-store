import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div className='w-full'>
      <Hero />
      <LatestCollection />
      
      {/* Editorial Section - Split Layout */}
      <div className='py-24 bg-gray-50'>
        <div className='container-custom flex flex-col md:flex-row items-center gap-16'>
            <div className='w-full md:w-1/2 h-[600px]'>
                <img 
                    className='w-full h-full object-cover' 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" 
                    alt="Editorial" 
                />
            </div>
            <div className='w-full md:w-1/2'>
                <p className='text-sm font-bold uppercase tracking-widest text-gray-400 mb-4'>Our Philosophy</p>
                <h2 className='text-4xl md:text-5xl font-serif mb-6 leading-tight'>
                    Designed for <br/> Longevity
                </h2>
                <p className='text-gray-600 font-light leading-relaxed mb-8 max-w-md'>
                    We believe in slow fashion. Our pieces are crafted to stand the test of time, both in style and durability. We source sustainable materials and work with ethical factories to bring you clothing you can feel good about wearing.
                </p>
                <a href="/about" className='text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 transition-colors'>
                    Read Our Story
                </a>
            </div>
        </div>
      </div>

      <OurPolicy />
      <NewsletterBox />
    </div>
  )
}

export default Home