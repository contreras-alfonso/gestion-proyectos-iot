import React from 'react'

const ListaAlertas = ({ listaAlertas,setListaAlertas }) => {

  return (
    <>
        <div onClick={()=>{setListaAlertas(false)}} className={`h-screen bg-black/80 cursor-pointer fixed bottom-0 duration-400 top-0 z-30 ${listaAlertas ? 'w-full' : 'w-0'}`}>

        </div>
        <div className={`overflow-y-auto bg-white transition-all duration-400 h-screen fixed z-40 bottom-0 top-0 right-0 cursor-default ${listaAlertas ? 'px-10 py-5 w-[400px]' : 'w-0'}`}>
            <div className={`transition-all duration-500 ${listaAlertas ? '' : ''}`}>
                <div className='flex justify-center items-center bg-color-bg py-3 rounded-lg'>
                    <h1 className='text-sm font-medium text-center'>Notificaciones</h1>
                </div>
                <div className='mt-6 flex justify-between items-center'>
                  <div className='flex items-center gap-3'>
                    <div className='bg-black/30 w-1 h-1 p-4 rounded-full flex items-center justify-center text-xs text-white'>
                      <i className="fa-regular fa-droplet"></i>
                    </div>
                    <div>
                      <p className='text-[13px]'>Sistema de riego 1 <span className='text-emerald-500'>activado</span></p>
                      <p className='text-xs text-gray-500'>23:05</p>
                    </div>
                  </div>
                  <div className='w-1 h-1 p-1 rounded-full bg-red-500'>
                    
                  </div>
                </div>
                <div className='mt-6 flex justify-between items-center'>
                  <div className='flex items-center gap-3'>
                    <div className='bg-black/30 w-1 h-1 p-4 rounded-full flex items-center justify-center text-xs text-white'>
                      <i className="fa-solid fa-wifi-slash"></i>
                    </div>
                    <div>
                      <p className='text-[13px]'>Sistema de riego 3 <span className='text-red-500'>Deshabilitado</span></p>
                      <p className='text-xs text-gray-500'>22:15</p>
                    </div>
                  </div>
                  <div className='w-1 h-1 p-1 rounded-full bg-red-500'>
                    
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ListaAlertas