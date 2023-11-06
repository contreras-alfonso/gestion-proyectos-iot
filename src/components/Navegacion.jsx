import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {secciones} from '../helpers/RutasNavegacion';

export const Navegacion = () => {
    const { pathname } = useLocation();
    let ruta = pathname.split('/')[2];
    const rutasNavegacion = secciones;
    console.log(ruta)

  return (
    <div className='w-80 bg-white py-5 pr-5 shadow-lg'>
        <div className='flex items-center gap-2 mb-5 ml-3'>
            <img src="/images/logo2.png" className='rounded-full h-14' alt="w" />
            <h2 className='uppercase text-sm'>Vivero la casa de plantas y flores</h2>
        </div>

        <ul className='text-sm font-medium flex flex-col gap-1'>
            {rutasNavegacion.map(e=>(
                <li key={e.seccion} >
                    <a href="/" className={`w-full gap-3  py-3 rounded-r-xl relative inline-flex items-center justify-start overflow-hidden transition-all group ${ruta==e.ruta ? 'bg-emerald-500' : 'bg-white'}`}>
                    <span className="w-0 rounded bg-emerald-500 absolute ease-out duration-500 transition-all group-hover:w-full group-hover:h-full z-1"></span>
                    <span className={` w-full z-10 px-5 group-hover:text-white flex items-center gap-3 ${ruta==e.ruta ? 'text-white' : 'text-black'}`}>
                        {e.icon}
                        <p className='text-[13px]'>{e.seccion}</p>
                    </span>
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}
