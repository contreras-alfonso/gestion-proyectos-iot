import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import { Navegacion } from '../components/Navegacion';

export const Dashboard = () => {

    const secciones = ["Dashboard","Layouts","Changelog","Email","Chat"]

  return (
    <div className='bg-color-bg h-screen flex'>

        <Navegacion secciones={secciones}/>

        <div className='p-10'>
            <h1 className='text-xl font-black mb-5 uppercase'>Dashboard</h1>
            <div className='bg-white w-96 p-10 rounded-lg flex flex-col gap-5'>
                <div className='flex justify-between items-center gap-5'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-3xl font-bold'><CountUp duration={4} end={100} />+</span>
                        <p className='text-sm'>Total Products</p>
                        
                    </div>
                    <span className='w-1 h-1 px-7 py-6 rounded-2xl bg-violet-100 text-violet-600 text-2xl flex items-center justify-center'><i class="fa-regular fa-suitcase-rolling"></i></span>
                </div>
                <p className='text-emerald-500 font-bold text-sm'><i class="fa-solid fa-arrow-up"></i> 25.36% <span className='text-gray-600 font-normal text-xs'>Since last month</span></p>
            </div>
        </div>
    </div>
  )
}
