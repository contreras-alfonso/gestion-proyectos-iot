import React from 'react'

export const CardInfoPlanta = () => {
  return (
    <div className='flex flex-col gap-3 items-center justify-center rounded-lg py-6 px-6 duration-300 hover:cursor-pointer hover:shadow bg-white w-64'>
        <img className='h-32' src="/images/planta5.jpeg" alt="" />
        <div className='text-center'>
            <h2 className='font-bold'>Potteng</h2>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur</p>
        </div>
    </div>
  )
}
