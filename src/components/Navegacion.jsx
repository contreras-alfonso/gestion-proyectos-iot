import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {secciones} from '../helpers/RutasNavegacion';
import ListaAlertas from './ListaAlertas';

export const Navegacion = ({listaAlertas,setListaAlertas}) => {

 
    const { pathname } = useLocation();
    const navigate = useNavigate();
    let ruta = pathname.split('/')[2];
    const rutasNavegacion = secciones;

    const cerrarSesion = () => {
        localStorage.removeItem('jwt');
        navigate('/')
    }

  return (
    <>
        <div className='max-lg:hidden w-80 bg-white py-10 pr-5 shadow-lg transition-all duration-300'>

            <ul className='text-sm font-medium flex flex-col gap-1'>
                {rutasNavegacion.map(e=>(
                    <li key={e.seccion} >
                        <a href={`/administration/${e.ruta}`} className={`w-full gap-3  py-3 rounded-r-lg relative inline-flex items-center justify-start overflow-hidden transition-all group ${ruta==e.ruta ? 'bg-emerald-500' : 'bg-white'}`}>
                        <span className="w-0 rounded bg-emerald-500 absolute ease-out duration-500 transition-all group-hover:w-full group-hover:h-full z-1"></span>
                        <span className={` w-full z-10 px-5 group-hover:text-white flex items-center gap-3 ${ruta==e.ruta ? 'text-white' : 'text-black'}`}>
                            {e.icon}
                            <p className='text-[13px]'>{e.seccion}</p>
                        </span>
                        </a>
                    </li>
                ))}

                <li>
                    <button onClick={()=>{setListaAlertas(!listaAlertas)}} className={`w-full gap-3  py-3 rounded-r-lg relative inline-flex items-center justify-start overflow-hidden transition-all group`}>
                    <span className="w-0 rounded bg-emerald-500 absolute ease-out duration-500 transition-all group-hover:w-full group-hover:h-full z-1"></span>
                    <span className={` w-full z-10 px-5 group-hover:text-white flex items-center gap-3`}>
                        <i className="fa-sharp fa-regular fa-bell"></i>
                        <div className='text-[13px] flex items-center justify-center gap-2'>
                            <p>Notificaciones</p> 
                            {/* <p className='rounded-full w-[3px] h-[3px] bg-red-500 p-2 text-[9px] text-white flex items-center justify-center'>2</p> */}
                        </div>
                        </span>
                    </button>
                </li>

                <li>
                    <button onClick={cerrarSesion} className={`w-full gap-3  py-3 rounded-r-lg relative inline-flex items-center justify-start overflow-hidden transition-all group`}>
                    <span className="w-0 rounded bg-emerald-500 absolute ease-out duration-500 transition-all group-hover:w-full group-hover:h-full z-1"></span>
                    <span className={` w-full z-10 px-5 group-hover:text-white flex items-center gap-3`}>
                        <i className="fa-regular fa-right-from-bracket"></i>
                        <div className='text-[13px] flex items-center justify-center gap-2'>
                            <p>Logout</p> 
                            {/* <p className='rounded-full w-[3px] h-[3px] bg-red-500 p-2 text-[9px] text-white flex items-center justify-center'>2</p> */}
                        </div>
                        </span>
                    </button>
                </li>
            </ul>
        </div>
        {listaAlertas && <ListaAlertas listaAlertas={listaAlertas} setListaAlertas={setListaAlertas}/>}
    </>
  )
}