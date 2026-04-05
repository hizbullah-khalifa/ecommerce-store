import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        // FIXED: Changed from '/api/user/admin' to '/api/user/register'
        const response = await axios.post(backendUrl + '/api/user/register', {name, email, password})
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          toast.success('Account created successfully!')
        } else {
          toast.error(response.data.message)
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          toast.success('Login successful!')
        } else {
          toast.error(response.data.message)
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
        <form onSubmit={onSubmitHandler} className='bg-white p-10 md:p-16 w-full max-w-md shadow-2xl fade-in'>
            <div className='text-center mb-12'>
                <h2 className='text-4xl font-serif mb-2'>{currentState}</h2>
                <p className='text-gray-400 font-light'>Welcome back to Urban Loom</p>
            </div>

            <div className='flex flex-col gap-6'>
                {currentState === 'Sign Up' && (
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full border-b border-gray-300 py-3 focus:border-black outline-none placeholder-gray-400 transition-colors' placeholder='Name' required />
                )}
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full border-b border-gray-300 py-3 focus:border-black outline-none placeholder-gray-400 transition-colors' placeholder='Email' required />
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='w-full border-b border-gray-300 py-3 focus:border-black outline-none placeholder-gray-400 transition-colors' placeholder='Password' required />
            </div>

            <div className='flex justify-between text-xs mt-4 text-gray-500'>
                <p className='cursor-pointer hover:text-black'>Forgot your password?</p>
                {currentState === 'Login'
                ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer hover:text-black font-bold'>Create account</p>
                : <p onClick={() => setCurrentState('Login')} className='cursor-pointer hover:text-black font-bold'>Login Here</p>
                }
            </div>

            <button className='w-full bg-black text-white py-4 mt-10 text-sm font-bold uppercase tracking-[0.2em] hover:bg-gray-900 transition-colors'>
                {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
            </button>
        </form>
    </div>
  )
}

export default Login