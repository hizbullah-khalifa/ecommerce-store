import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({ token }) => {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData()

      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      formData.append("sizes", JSON.stringify(sizes))

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } })

      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-8 text-gray-700 p-8 bg-white min-h-screen'>
      
      <div className='w-full max-w-2xl'>
        <h2 className='text-2xl font-serif mb-8'>Add New Product</h2>

        <div className='mb-8'>
            <p className='label-text'>Upload Images</p>
            <div className='flex gap-4'>
                {[image1, image2, image3, image4].map((img, index) => (
                    <label key={index} htmlFor={`image${index+1}`} className='cursor-pointer group'>
                        <div className='w-24 h-32 border-2 border-dashed border-gray-200 flex items-center justify-center bg-gray-50 group-hover:border-gray-400 transition-colors relative overflow-hidden'>
                            {!img ? (
                                <img className='w-8 opacity-30' src={assets.upload_area} alt="" />
                            ) : (
                                <img className='w-full h-full object-cover' src={URL.createObjectURL(img)} alt="" />
                            )}
                        </div>
                        <input onChange={(e) => {
                            if(index === 0) setImage1(e.target.files[0])
                            if(index === 1) setImage2(e.target.files[0])
                            if(index === 2) setImage3(e.target.files[0])
                            if(index === 3) setImage4(e.target.files[0])
                        }} type="file" id={`image${index+1}`} hidden />
                    </label>
                ))}
            </div>
        </div>

        <div className='mb-6'>
            <p className='label-text'>Product Name</p>
            <input onChange={(e) => setName(e.target.value)} value={name} className='input-field' type="text" placeholder='Type here' required />
        </div>

        <div className='mb-6'>
            <p className='label-text'>Product Description</p>
            <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='input-field h-32 resize-none' placeholder='Write content here' required />
        </div>

        <div className='flex flex-col sm:flex-row gap-8 mb-6'>
            <div className='w-full'>
                <p className='label-text'>Category</p>
                <select onChange={(e) => setCategory(e.target.value)} className='input-field cursor-pointer bg-white'>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                </select>
            </div>

            <div className='w-full'>
                <p className='label-text'>Sub Category</p>
                <select onChange={(e) => setSubCategory(e.target.value)} className='input-field cursor-pointer bg-white'>
                    <option value="Topwear">Topwear</option>
                    <option value="Bottomwear">Bottomwear</option>
                    <option value="Winterwear">Winterwear</option>
                </select>
            </div>

            <div className='w-full'>
                <p className='label-text'>Price</p>
                <input onChange={(e) => setPrice(e.target.value)} value={price} className='input-field' type="number" placeholder='25' />
            </div>
        </div>

        <div className='mb-8'>
            <p className='label-text'>Product Sizes</p>
            <div className='flex gap-3'>
                {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <div key={size} onClick={() => setSizes(prev => prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size])}>
                        <p className={`${sizes.includes(size) ? 'bg-black text-white border-black' : 'bg-white text-gray-500 border-gray-200'} border px-4 py-2 cursor-pointer text-sm font-medium transition-colors`}>
                            {size}
                        </p>
                    </div>
                ))}
            </div>
        </div>

        <div className='flex gap-2 mt-2 mb-8'>
            <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id="bestseller" className='w-4 h-4 accent-black cursor-pointer' />
            <label className='cursor-pointer text-sm text-gray-600' htmlFor="bestseller">Add to Bestseller</label>
        </div>

        <button type="submit" className='w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors'>
            Add Product
        </button>

      </div>
    </form>
  )
}

export default Add