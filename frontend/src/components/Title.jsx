import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-6'>
        <p className='text-gray-500 text-xl font-serif uppercase tracking-widest'>{text1} <span className='text-black font-medium'>{text2}</span></p>
        <p className='w-12 h-[1px] bg-gray-700'></p>
    </div>
  )
}

export default Title