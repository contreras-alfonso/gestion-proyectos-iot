import React from 'react'

export const InformacionPlanta = () => {
  return (
    <div className='w-fit bg-white p-5 mt-5 rounded-lg flex flex-col gap-5'>
        <h1 className='font-semibold max-lg:text-sm text-center'>Información de la planta</h1>
        <div className='flex gap-10 items-center'>
            <div className='flex flex-col gap-2'>
                <p className='text-sm font-semibold'>Nombre: <span className='font-normal'>Can arrowing</span></p>
                <p className='text-sm font-semibold'>Especie: <span className='font-normal'>Ipnus son joe</span></p>
                <p className='text-sm font-semibold'>Humedad: <span className='font-normal'>1000</span></p>
                <p className='text-sm font-semibold'>Temperatura: <span className='font-normal'>23°C</span></p>
                <p className='text-sm font-semibold'>Suelo: <span className='font-normal'>200</span></p>
            </div>
            <img className='w-16' src="/images/planta3.jpeg" alt="" />
        </div>
        <button className='text-sm border-emerald-500 border rounded-lg py-2 bg-emerald-500 text-white duration-300 hover:bg-emerald-600'>Desvincular</button>
    </div>
  )
}
