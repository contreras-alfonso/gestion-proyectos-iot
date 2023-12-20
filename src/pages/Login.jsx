import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useUser from '../hooks/useUser';
import { toast } from 'react-toastify';

export const Login = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState('');
  const [password,setPassword] = useState('');

  const {login} = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if([user,password].includes('')){
      toast.error('Todos los campos son obligatorios.');
      return;
    }

    const data = await login({user,password});
    if(!data.status){
      toast.error(data.msg)
      return;
    }
    localStorage.setItem('jwt',data.token)
    navigate('/administration/dashboard')
  }

  return (
    <div className='h-screen flex items-center justify-center 
    fondo_svg'>
        <div className='bg-white w-[520px] mx-5  rounded-lg shadow-lg h-fit flex items-center justify-center border-[1px] border-gray-100'>
          <form className='flex flex-col w-full gap-5 px-10 py-16 max-lg:w-full' action="">
            <div className='space-y-2'>
              <h1 className='font-bold text-3xl text-center'>Sign In</h1>
              <p className='text-gray-400 text-sm font-medium text-center'>Vivero la casa de plantas y flores</p>
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
              <p className='w-1/3 text-center text-gray-400 text-xs'>With email</p>
              <hr className='border-[1px] border-gray-100 w-1/3'/>

            </div>

            <div className='flex flex-col gap-5'>
              <input value={user} onChange={(e)=>{setUser(e.target.value)}} type="text" placeholder='Email' className='border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none'/>
              <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password' className='border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none'/>
            </div>
            <p className='text-end text-emerald-500 text-xs cursor-pointer'>Forgot password?</p>
            <button onClick={handleSubmit} type='submit' className='bg-emerald-500 text-white rounded-lg py-3 text-sm text-center hover:bg-emerald-600 duration-300' >Sign In</button>
            {/* <p className='text-gray-400 text-sm font-medium text-center'>Not a Member you? <span className='text-emerald-500'>Sign Up</span></p> */}
          </form>
        </div>

    </div>
  )
}