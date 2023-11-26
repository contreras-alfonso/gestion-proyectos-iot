import React, { useEffect, useState } from 'react'
import { ContainerAlerta } from './ContainerAlerta'

const ListaAlertas = ({ listaAlertas,setListaAlertas }) => {

  const [notificaciones,setNotificaciones] = useState([])

  useEffect(()=>{
    const obtenerAlertas = async () => {
      const url = `${import.meta.env.VITE_RUTA_BACKEND}/notificaciones/getAll`;
      const response = await fetch(url);
      const data = await response.json();
      setNotificaciones(data);
      }
    obtenerAlertas();
  },[])

  return (

    <>
        <div onClick={()=>{setListaAlertas(false)}} className={`h-screen bg-black/80 cursor-pointer fixed bottom-0 duration-400 top-0 z-30 ${listaAlertas ? 'w-full' : 'w-0'}`}>

        </div>
        <div className={`overflow-y-auto bg-white transition-all duration-400 h-screen fixed z-40 bottom-0 top-0 right-0 cursor-default ${listaAlertas ? 'px-5 py-5 w-[400px]' : 'w-0'}`}>
            <div className={`transition-all duration-500 ${listaAlertas ? '' : ''}`}>
                <div className='flex justify-center items-center bg-white border border-gray-400 border-dashed  py-3 rounded-lg'>
                    <h1 className='text-sm text-gray-600 font-medium text-center'>Notificaciones</h1>
                </div>

                <div className=' flex flex-col gap-5  p-5 rounded-lg mt-5'>
                  {notificaciones.map(e=>{
                    return (<ContainerAlerta key={e._id} alerta={e}/>)
                  })}
                </div>

            </div>
        </div>
    </>
  )
}

export default ListaAlertas