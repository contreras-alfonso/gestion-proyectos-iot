import React from 'react'
import CountUp from 'react-countup';

export const CardInfo = ({info}) => {
    const {text,numberMax,simbol,bgColor,icon} = info;
  return (
    <div className='bg-white w-96 p-10 rounded-lg flex flex-col gap-5 shadow'>
        <div className='flex justify-between items-center gap-5'>
            <div className='flex flex-col gap-2'>
                <span className='text-3xl font-bold'><CountUp duration={4} end={numberMax} />{simbol}</span>
                <p className='text-sm'>{text}</p>
                
            </div>
            <span className={`w-1 h-1 px-7 py-6 rounded-2xl text-2xl flex items-center justify-center ${bgColor}`}>{icon}</span>
        </div>
        <p className='text-emerald-500 font-bold text-sm'><i className="fa-solid fa-arrow-up"></i> 25.36% <span className='text-gray-600 font-normal text-xs'>Since last month</span></p>
    </div>
  )
}
