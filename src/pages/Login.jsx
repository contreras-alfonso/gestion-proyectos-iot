import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className='h-screen flex'>
        <div className='w-1/2 flex items-center justify-center'>
          <form className='flex flex-col gap-5 px-10 max-lg:w-full' action="">
            <div className='space-y-2'>
              <h1 className='font-bold text-3xl text-center'>Sign In</h1>
              <p className='text-gray-400 text-sm font-medium text-center'>Your Social Campains</p>
            </div>
            <div className='flex max-lg:flex-col gap-2 w-full'>
              <button type='button' className='border border-gray-300 text-gray-600 py-3 px-7 rounded-lg text-xs flex items-center justify-center gap-2'>
                <img src="/images/google-logo.png" className='w-4' alt="logo-google" /> 
                <span>Sign in With Google</span>
              </button>
              <button type='button' className='border border-gray-300 text-gray-600 py-3 px-7 rounded-lg text-xs flex items-center justify-center gap-2'>
                <img src="/images/facebook-logo.png" className='w-4' alt="logo-google" /> 
                <span>Sign in With Facebook</span>
              </button>
            </div>
            <div className='my-3 flex items-center'>
              <hr className='border-[1px] border-gray-100 w-1/3'/>
              <p className='w-1/3 text-center text-gray-400 text-xs'>Or with email</p>
              <hr className='border-[1px] border-gray-100 w-1/3'/>

            </div>

            <div className='flex flex-col gap-5'>
              <input type="text" placeholder='Email' className='border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none'/>
              <input type="password" placeholder='Password' className='border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none'/>
            </div>
            <p className='text-end text-emerald-500 text-xs'>Forgot password?</p>
            <Link to={'/administration/dashboard'} className='bg-emerald-500 text-white rounded-lg py-3 text-sm text-center' >Sign In</Link>
            <p className='text-gray-400 text-sm font-medium text-center'>Not a Member you? <span className='text-emerald-500'>Sign Up</span></p>
          </form>
        </div>

        <div className='w-1/2 bg-emerald-500 fondo_svg flex flex-col gap-5 items-center justify-center'>
          
          <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/misc/auth-screens.png" className='w-[500px]' alt="" />
          <h2 className='text-3xl font-black text-white'>Fast, Efficient and Productive</h2>
          <p className='text-white w-3/4 text-sm text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo amet explicabo saepe quae <span className='text-yellow-400'>molestias</span> hic praesentium, ratione facere velit, eaque minus. <span className='text-yellow-400'>Laudantium</span> pariatur assumenda facilis id laborum reprehenderit consectetur earum.</p>
          
          
        </div>
    </div>
  )
}
