import React from 'react'

export const NavegacionSkeleton = () => {
  return (
    <div className='w-80 bg-white py-10 pr-5 shadow-lg transition-all duration-300'>

        <ul className='text-sm font-medium flex flex-col gap-1 animate-pulse'>
  
                <li>
                    <div className={`w-full p-3 flex items-center justify-center gap-3`}>
                        <div className="h-1 p-3 bg-gray-200 rounded-full dark:bg-gray-700 w-1"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
                    </div>
                </li>

                <li>
                    <div className={`w-full p-3 flex items-center justify-center gap-3`}>
                        <div className="h-1 p-3 bg-gray-200 rounded-full dark:bg-gray-700 w-1"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
                    </div>
                </li>

                <li>
                    <div className={`w-full p-3 flex items-center justify-center gap-3`}>
                        <div className="h-1 p-3 bg-gray-200 rounded-full dark:bg-gray-700 w-1"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
                    </div>
                </li>

                <li>
                    <div className={`w-full p-3 flex items-center justify-center gap-3`}>
                        <div className="h-1 p-3 bg-gray-200 rounded-full dark:bg-gray-700 w-1"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
                    </div>
                </li>

        </ul>
    </div>
  )
}
