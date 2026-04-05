import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault()
    }
  return (
    <div className='text-center mt-20 py-10'>
        <p className='text-3xl font-serif text-gray-800 mb-4'>Subscribe & Save</p>
        <p className='text-gray-400 mt-3 max-w-md mx-auto leading-relaxed'>Join our community and get 20% off your first order, plus early access to new arrivals.</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-8 border-b border-black pb-2'>
            <input className='w-full sm:flex-1 outline-none text-gray-600 bg-transparent placeholder-gray-400' type="email" placeholder='Enter your email address' required/>
            <button type='submit' className='bg-black text-white text-xs px-8 py-3 hover:bg-gray-800 transition-colors uppercase tracking-widest'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetterBox