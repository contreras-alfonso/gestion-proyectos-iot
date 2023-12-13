import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Navegacion } from '../components/Navegacion'
import { NavegacionSkeleton } from '../components/NavegacionSkeleton'
import { OutletSkeleton } from '../components/OutletSkeleton'
import useUser from '../hooks/useUser'
import { FixedNavegacion } from '../components/FixedNavegacion'

export const LayoutPrivado = () => {

  const {verificarLogin,user,setUser,cargando} = useUser();
  const [listaAlertas,setListaAlertas] = useState(false);
  const [fixedNavegacion,setFixedNavegacion] = useState(false);

  useEffect(()=>{
    const validarLogin = async () => {
      const data = await verificarLogin();
      setUser(data);
    }
    validarLogin();
  
  },[])


    if(cargando){
 
        return (
          <>
            <div className='bg-color-bg h-screen flex'>
              <NavegacionSkeleton/>
      
              <div className='w-full h-screen overflow-y-scroll p-10 animate-pulse'>
                <OutletSkeleton/>
              </div>
            </div>
          </>
        )
      
    }




  return (
    <>
    {user?._id ? (
          <>
            <div className='bg-color-bg h-screen flex'>
              <Navegacion listaAlertas={listaAlertas} setListaAlertas={setListaAlertas}/>
      
              <div className='w-full h-screen overflow-y-scroll p-10'> 

                  <div className={`hidden max-lg:flex bg-white rounded-lg px-5 py-3 mb-5  gap-5 justify-end items-center fixed right-10 left-10 top-3 z-10 shadow-md`}>
                    <i onClick={()=>{setListaAlertas(true)}} className="fa-regular fa-bell text-gray-600 cursor-pointer hover:bg-slate-100 hover:rounded-full p-2 hover:shadow"></i>
                    <i onClick={()=>{setFixedNavegacion(true)}} className="fa-solid fa-bars text-gray-600 cursor-pointer hover:bg-slate-100 hover:rounded-full p-2 hover:shadow"></i>
                  </div>

                  <div className='max-lg:mt-12'>
                    <Outlet/>
                  </div>
              </div>
            </div>
            {fixedNavegacion && <FixedNavegacion fixedNavegacion={fixedNavegacion}setFixedNavegacion={setFixedNavegacion}/>}
          </>
    ) : <Navigate to={'/'}></Navigate>}

    </>
  )
}
