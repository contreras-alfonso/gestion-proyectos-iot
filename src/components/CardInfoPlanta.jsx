import React from 'react'

export const CardInfoPlanta = ({planta}) => { 
  const {_id,nombre,especie,temperatura, pathIcono} = planta;
  return (
    <div className='flex flex-col gap-3 items-center justify-center rounded-lg py-6 px-6 duration-300 hover:cursor-pointer hover:shadow bg-white w-64 text-center'>
        <div className='flex items-center justify-center'>
        <img className='h-32' src={`${import.meta.env.VITE_RUTA_BACKEND}/${pathIcono}`} alt="" />
        </div>
            <h2 className='font-bold'>{nombre}</h2>
            <p className='text-sm'>{especie}</p>

    </div>
  )
}
