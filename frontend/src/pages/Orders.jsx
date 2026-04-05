import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios';

const Orders = () => {

  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([])

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null
      }
      const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } })
      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse())
      }
    } catch (error) {

    }
  }

  useEffect(() => {
    loadOrderData()
  }, [token])

  return (
    <div className='pt-32 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] min-h-screen'>
      
      <h1 className='text-5xl md:text-7xl font-serif mb-16'>Order History</h1>

      <div className='flex flex-col gap-8'>
        {orderData.map((item, index) => (
            <div key={index} className='flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-b border-gray-100 pb-8'>
                <div className='flex items-start gap-6'>
                    <div className='w-20 h-24 bg-gray-50 flex-shrink-0'>
                        <img className='w-full h-full object-cover' src={item.image[0]} alt="" />
                    </div>
                    <div>
                        <h3 className='text-lg font-medium uppercase tracking-wide mb-2'>{item.name}</h3>
                        <div className='flex items-center gap-4 text-sm text-gray-500 mb-2'>
                            <p>{currency}{item.price}</p>
                            <p>Size: {item.size}</p>
                            <p>Qty: {item.quantity}</p>
                        </div>
                        <p className='text-xs text-gray-400'>Date: <span className='text-gray-600'>{new Date(item.date).toDateString()}</span></p>
                        <p className='text-xs text-gray-400 mt-1'>Payment: <span className='text-gray-600 uppercase'>{item.paymentMethod}</span></p>
                    </div>
                </div>

                <div className='flex flex-col md:items-end gap-4'>
                    <div className='flex items-center gap-2'>
                        <div className={`w-2 h-2 rounded-full ${item.status === 'Delivered' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                        <p className='text-sm font-medium uppercase tracking-wide'>{item.status}</p>
                    </div>
                    <button onClick={loadOrderData} className='border border-gray-200 px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all'>
                        Track Order
                    </button>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Orders