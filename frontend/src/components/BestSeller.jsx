import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const {products} = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([])

  useEffect(() => {
    const bestProduct = products.filter((item) => (item.bestseller))
    setBestSeller(bestProduct.slice(0,5))
  }, [products])
  return (
    <div className='my-20'>
      <div className='text-center py-8'>
        <Title text1={'Best'} text2={'Sellers'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500 font-light tracking-wide'>
          Our most loved pieces, chosen by you.
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-10'>
        {bestSeller.map((item, index) => (
          <ProductItem 
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default BestSeller