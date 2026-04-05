import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrder = () => {

    const [method, setMethod] = useState('cod');
    const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [name]: value }))
    }

    const initPay = (order) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: 'Order Payment',
            description: 'Order Payment',
            order_id: order.id,
            receipt: order.receipt,
            handler: async (response) => {
                try {
                    const { data } = await axios.post(backendUrl + '/api/order/verifyRazorpay', response, { headers: { token } })
                    if (data.success) {
                        navigate('/orders')
                        setCartItems({})
                    }
                } catch (error) {
                    console.log(error)
                    toast.error(error)
                }
            }
        }
        const rzp = new window.Razorpay(options)
        rzp.open()
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            let orderItems = []
            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        const itemInfo = structuredClone(products.find(product => product._id === items))
                        if (itemInfo) {
                            itemInfo.size = item
                            itemInfo.quantity = cartItems[items][item]
                            orderItems.push(itemInfo)
                        }
                    }
                }
            }

            let orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount() + delivery_fee
            }

            switch (method) {
                case 'cod':
                    const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } })
                    if (response.data.success) {
                        setCartItems({})
                        navigate('/orders')
                    } else {
                        toast.error(response.data.message)
                    }
                    break;

                case 'stripe':
                    const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderData, { headers: { token } })
                    if (responseStripe.data.success) {
                        const { session_url } = responseStripe.data
                        window.location.replace(session_url)
                    } else {
                        toast.error(responseStripe.data.message)
                    }
                    break;

                case 'razorpay':
                    const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderData, { headers: { token } })
                    if (responseRazorpay.data.success) {
                        initPay(responseRazorpay.data.order)
                    }
                    break;

                default:
                    break;
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='pt-32 container-custom min-h-screen pb-20'>
            
            <h1 className='text-3xl font-serif mb-12'>Checkout</h1>

            <div className='flex flex-col lg:flex-row gap-16'>
                
                {/* Left: Form */}
                <div className='w-full lg:w-1/2'>
                    <h3 className='text-lg font-serif mb-6'>Shipping Information</h3>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-4'>
                            <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='w-full border border-gray-200 px-4 py-3 text-sm focus:border-black outline-none rounded-sm' type="text" placeholder='First name' />
                            <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='w-full border border-gray-200 px-4 py-3 text-sm focus:border-black outline-none rounded-sm' type="text" placeholder='Last name' />
                        </div>
                        <input required onChange={onChangeHandler} name='email' value={formData.email} className='w-full border border-gray-200 px-4 py-3 text-sm focus:border-black outline-none rounded-sm' type="email" placeholder='Email address' />
                        <input required onChange={onChangeHandler} name='street' value={formData.street} className='w-full border border-gray-200 px-4 py-3 text-sm focus:border-black outline-none rounded-sm' type="text" placeholder='Street' />
                        <div className='flex gap-4'>
                            <input required onChange={onChangeHandler} name='city' value={formData.city} className='w-full border border-gray-200 px-4 py-3 text-sm focus:border-black outline-none rounded-sm' type="text" placeholder='City' />
                            <input required onChange={onChangeHandler} name='state' value={formData.state} className='w-full border border-gray-200 px-4 py-3 text-sm focus:border-black outline-none rounded-sm' type="text" placeholder='State' />
                        </div>
                        <div className='flex gap-4'>
                            <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='w-full border border-gray-200 px-4 py-3 text-sm focus:border-black outline-none rounded-sm' type="number" placeholder='Zipcode' />
                            <input required onChange={onChangeHandler} name='country' value={formData.country} className='w-full border border-gray-200 px-4 py-3 text-sm focus:border-black outline-none rounded-sm' type="text" placeholder='Country' />
                        </div>
                        <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='w-full border border-gray-200 px-4 py-3 text-sm focus:border-black outline-none rounded-sm' type="number" placeholder='Phone' />
                    </div>
                </div>

                {/* Right: Payment */}
                <div className='w-full lg:w-1/2'>
                    <div className='bg-gray-50 p-8 rounded-sm'>
                        <h3 className='text-lg font-serif mb-6'>Payment Method</h3>
                        
                        <div className='flex flex-col gap-3 mb-8'>
                            <div onClick={() => setMethod('stripe')} className={`flex items-center gap-4 p-4 border cursor-pointer bg-white ${method === 'stripe' ? 'border-black ring-1 ring-black' : 'border-gray-200 hover:border-gray-300'}`}>
                                <div className={`w-3 h-3 rounded-full border ${method === 'stripe' ? 'bg-black border-black' : 'border-gray-300'}`}></div>
                                <img className='h-5' src={assets.stripe_logo} alt="Stripe" />
                            </div>
                            <div onClick={() => setMethod('razorpay')} className={`flex items-center gap-4 p-4 border cursor-pointer bg-white ${method === 'razorpay' ? 'border-black ring-1 ring-black' : 'border-gray-200 hover:border-gray-300'}`}>
                                <div className={`w-3 h-3 rounded-full border ${method === 'razorpay' ? 'bg-black border-black' : 'border-gray-300'}`}></div>
                                <img className='h-5' src={assets.razorpay_logo} alt="Razorpay" />
                            </div>
                            <div onClick={() => setMethod('cod')} className={`flex items-center gap-4 p-4 border cursor-pointer bg-white ${method === 'cod' ? 'border-black ring-1 ring-black' : 'border-gray-200 hover:border-gray-300'}`}>
                                <div className={`w-3 h-3 rounded-full border ${method === 'cod' ? 'bg-black border-black' : 'border-gray-300'}`}></div>
                                <p className='text-sm font-medium text-gray-700'>Cash on Delivery</p>
                            </div>
                        </div>

                        <CartTotal />

                        <button type='submit' className='w-full bg-black text-white py-4 mt-8 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors'>
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder