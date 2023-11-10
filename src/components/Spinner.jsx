import React from 'react'

export const Spinner = () => {
  return (
    <div className='fixed bottom-0 top-0 right-0 left-0 h-screen w-full bg-black/80 z-20 flex items-center justify-center'>
        <i className="fa-duotone fa-spinner-third fa-spin text-emerald-500 text-5xl"></i>
    </div>
  )
}
