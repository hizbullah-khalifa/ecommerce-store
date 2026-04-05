import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({ token }) => {

  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.data.success) {
        setList(response.data.products);
      }
      else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } })
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList();
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className='p-8 bg-white min-h-screen'>
      <h2 className='text-2xl font-serif mb-8'>All Products List</h2>
      
      <div className='flex flex-col gap-2'>
        {/* Table Header */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-3 px-4 bg-gray-50 border border-gray-200 text-xs font-bold uppercase tracking-widest text-gray-500'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {/* Table Body */}
        {list.map((item, index) => (
          <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-4 py-4 px-4 border-b border-gray-100 hover:bg-gray-50 transition-colors text-sm text-gray-700' key={index}>
            <img className='w-12 h-16 object-cover bg-gray-100' src={item.image[0]} alt="" />
            <p className='font-medium'>{item.name}</p>
            <p>{item.category}</p>
            <p>{currency}{item.price}</p>
            <div className='text-center'>
                <button onClick={() => removeProduct(item._id)} className='text-gray-400 hover:text-red-600 transition-colors text-lg'>
                    ✕
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List