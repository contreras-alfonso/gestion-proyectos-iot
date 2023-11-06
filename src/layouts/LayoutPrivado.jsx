import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navegacion } from '../components/Navegacion'

export const LayoutPrivado = () => {
  return (
    <>
      <div className='bg-color-bg h-screen flex'>
        <Navegacion/>

        <div className='p-10 w-full h-screen overflow-y-scroll'>
            <Outlet/>
        </div>
      </div>
    </>
  )
}
