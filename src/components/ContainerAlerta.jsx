import React from 'react'

export const ContainerAlerta = ({alerta}) => {
    const {estado,hora,fecha,dispositivo} = alerta;
  return ( 
    <div className=' flex justify-between items-center'>
        <div className='flex items-center gap-3'>
            <div className={` w-1 h-1 p-4 rounded-full flex items-center justify-center text-xs text-white ${estado=='3' ? 'bg-black/90' : 'bg-black/70'}`}>
                {estado === "1" ? (
                    <i className="fa-solid fa-power-off"></i>
                ) : estado === "2" ? (
                    <i className="fa-solid fa-wifi-slash"></i>
                ) : estado === "3" ? (
                    <i className="fa-regular fa-droplet"></i>
                ) : (
                    <i className="fa-solid fa-cloud-exclamation"></i>
                )}
            </div>
            <div>
                {estado === "1" ? (
                    <p className='text-[13px]'>Sistema de riego {dispositivo.numeroDispositivo} <span className='text-emerald-500'>encendido</span></p>
                ) : estado === "2" ? (
                    <p className='text-[13px]'>Sistema de riego {dispositivo.numeroDispositivo} <span className='text-red-500'>apagado</span></p>
                ) : estado === "3" ? (
                    <p className='text-[13px]'>Riego <span className='text-emerald-500'>activado</span> <span> en el sistema {dispositivo.numeroDispositivo}</span></p>
                ) : (
                    <p className='text-xs text-red-500'>Null</p>
                )}
                <p className='text-xs text-gray-500'>{`${fecha} ${' '}`}{hora}</p>
            </div>
        </div>
        <div className='w-1 h-1 p-1 rounded-full bg-red-500'>
        
        </div>
    </div>
  )
}
