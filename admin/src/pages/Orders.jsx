import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Orders = ({ token }) => {

  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
      if (response.data.success) {
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(backendUrl + '/api/order/status', { orderId, status: event.target.value }, { headers: { token } })
      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
      toast.error(response.data.message)
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [token])

  return (
    <div className='p-8 bg-white min-h-screen'>
      <h2 className='text-2xl font-serif mb-8'>Order Page</h2>
      
      <div className='flex flex-col gap-6'>
        {orders.map((order, index) => (
          <div className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-6 items-start border border-gray-200 p-6 rounded-sm hover:shadow-sm transition-shadow' key={index}>
            
            <img className='w-12 opacity-60' src={assets.parcel_icon} alt="" />
            
            <div className='text-sm text-gray-600'>
              <div className='mb-2'>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return <p className='py-0.5 font-medium text-black' key={index}> {item.name} x {item.quantity} <span className='text-gray-400 text-xs ml-1'>{item.size}</span> </p>
                  }
                  else {
                    return <p className='py-0.5 font-medium text-black' key={index}> {item.name} x {item.quantity} <span className='text-gray-400 text-xs ml-1'>{item.size}</span> ,</p>
                  }
                })}
              </div>
              <p className='font-bold text-black mb-1'>{order.address.firstName + " " + order.address.lastName}</p>
              <div className='text-xs leading-relaxed'>
                <p>{order.address.street + ","}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
              </div>
              <p className='mt-2 text-xs'>{order.address.phone}</p>
            </div>

            <div className='text-sm text-gray-600'>
              <p className='mb-1'>Items: <span className='font-medium text-black'>{order.items.length}</span></p>
              <p className='mb-1'>Method: <span className='font-medium text-black'>{order.paymentMethod}</span></p>
              <p>Payment: <span className={`font-medium ${order.payment ? 'text-green-600' : 'text-orange-500'}`}>{order.payment ? 'Done' : 'Pending'}</span></p>
              <p className='mt-1'>Date: <span className='font-medium text-black'>{new Date(order.date).toLocaleDateString()}</span></p>
            </div>

            <p className='text-sm font-bold text-black'>{currency}{order.amount}</p>

            <select onChange={(event) => statusHandler(event, order._id)} value={order.status} className='p-2 border border-gray-200 text-xs font-bold uppercase tracking-widest focus:border-black outline-none cursor-pointer bg-gray-50'>
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
