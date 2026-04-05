import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {

  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item]
            })
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products])

  return (
    <div className='pt-32 container-custom min-h-screen'>
      
      <h1 className='text-3xl font-serif mb-12'>Shopping Cart</h1>

      <div className='flex flex-col lg:flex-row gap-16'>
        
        {/* Cart Items */}
        <div className='w-full lg:w-2/3'>
            {cartData.length === 0 ? (
                <div className='py-12 border-t border-b border-gray-100 text-center'>
                    <p className='text-gray-400'>Your cart is currently empty.</p>
                </div>
            ) : (
                <div className='flex flex-col'>
                    {cartData.map((item, index) => {
                        const productData = products.find((product) => product._id === item._id);
                        return (
                            <div key={index} className='flex gap-6 py-8 border-t border-gray-100 first:border-t-0'>
                                <div className='w-24 aspect-[3/4] bg-gray-50 flex-shrink-0'>
                                    <img className='w-full h-full object-cover' src={productData.image[0]} alt="" />
                                </div>
                                
                                <div className='flex-1 flex flex-col justify-between'>
                                    <div>
                                        <div className='flex justify-between items-start mb-2'>
                                            <h3 className='text-sm font-medium uppercase tracking-wide'>{productData.name}</h3>
                                            <p className='text-sm font-medium'>{currency}{productData.price}</p>
                                        </div>
                                        <p className='text-xs text-gray-500'>Size: {item.size}</p>
                                    </div>

                                    <div className='flex justify-between items-end'>
                                        <div className='flex items-center border border-gray-200'>
                                            <button onClick={() => item.quantity > 1 ? updateQuantity(item._id, item.size, item.quantity - 1) : null} className='px-3 py-1 hover:bg-gray-50 text-gray-500'>-</button>
                                            <span className='px-3 py-1 text-sm font-medium'>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)} className='px-3 py-1 hover:bg-gray-50 text-gray-500'>+</button>
                                        </div>
                                        <button onClick={() => updateQuantity(item._id, item.size, 0)} className='text-xs text-gray-400 hover:text-black underline transition-colors'>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>

        {/* Summary */}
        <div className='w-full lg:w-1/3'>
            <div className='bg-gray-50 p-8 rounded-sm sticky top-32'>
                <h3 className='text-lg font-serif mb-6'>Order Summary</h3>
                <CartTotal />
                <button onClick={() => navigate('/place-order')} className='w-full bg-black text-white py-4 mt-8 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors'>
                    Proceed to Checkout
                </button>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Cart
