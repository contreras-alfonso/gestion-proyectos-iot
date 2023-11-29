import React, { useEffect, useState } from 'react'
import { ContainerAlerta } from './ContainerAlerta'

const ListaAlertas = ({ listaAlertas,setListaAlertas }) => {

  const [notificaciones,setNotificaciones] = useState([])
  const [pagina,setPagina] = useState(1);
  const [mensajePagina,setMensajePagina] = useState('')

  const obtenerAlertas = async () => {
    const url = `${import.meta.env.VITE_RUTA_BACKEND}/notificaciones/getAll/${pagina}`;
    const response = await fetch(url);
    const data = await response.json();
    setNotificaciones(data.notificaciones);
    setMensajePagina(data.msg);
  }

  const handleIncrement = async () => {
    setPagina(pagina => pagina + 1);
  }

  const handleDecrement = async () => {
    if(pagina>=2){
      setPagina(pagina => pagina - 1);

    }
  }

  useEffect(()=>{
    obtenerAlertas();
  },[pagina])

  return (

    <>
        <div onClick={()=>{setListaAlertas(false)}} className={`h-screen bg-black/80 cursor-pointer fixed bottom-0 duration-400 top-0 z-30 ${listaAlertas ? 'w-full' : 'w-0'}`}>

        </div>
        <div className={`overflow-y-auto bg-white transition-all duration-400 h-screen fixed z-40 bottom-0 top-0 right-0 cursor-default ${listaAlertas ? 'px-5 py-5 w-[400px]' : 'w-0'}`}>
            <div className={`transition-all duration-500 ${listaAlertas ? '' : ''}`}>
                <div className='flex justify-center items-center bg-white border border-gray-400 border-dashed  py-3 rounded-lg'>
                    <h1 className='text-sm text-gray-600 font-medium text-center'>Notificaciones</h1>
                </div>

                {notificaciones.length>0 && (
                  <div className=' flex flex-col gap-5 p-5 rounded-lg mt-5'>
                    {notificaciones.map(e=>{
                      return (<ContainerAlerta key={e._id} alerta={e}/>)
                    })}
                  </div>
                )}


                {notificaciones.length>0 ? (
                  <div className='p-5 flex justify-between items-center'>
                    <button onClick={handleDecrement} className='rounded-full bg-slate-100 p-5 w-1 h-1 flex items-center justify-center duration-300 hover:shadow'><i className="fa-solid fa-chevron-left text-gray-400 text-xs"></i></button>
                    <p className='text-xs text-gray-500'>Mostrando {mensajePagina}</p>
                    <button onClick={handleIncrement} className='rounded-full bg-slate-100 p-5 w-1 h-1 flex items-center justify-center duration-300 hover:shadow'><i className="fa-solid fa-chevron-right text-gray-400 text-xs"></i></button>
                  </div>
                ) : 
                (
                  <div className='p-5 flex justify-between items-center'>
                  <button onClick={handleDecrement} className='rounded-full bg-slate-100 p-5 w-1 h-1 flex items-center justify-center duration-300 hover:shadow'><i className="fa-solid fa-chevron-left text-gray-400 text-xs"></i></button>
                  <p className='text-xs text-gray-500'>Nada para mostrar</p>
                  <button onClick={handleIncrement} className='rounded-full bg-slate-100 p-5 w-1 h-1 flex items-center justify-center duration-300 hover:shadow'><i className="fa-solid fa-chevron-right text-gray-400 text-xs"></i></button>
                </div>
                )}

            </div>
        </div>
    </>
  )
}

export default ListaAlertas