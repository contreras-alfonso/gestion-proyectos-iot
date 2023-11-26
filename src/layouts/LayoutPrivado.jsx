import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Navegacion } from '../components/Navegacion'
import { NavegacionSkeleton } from '../components/NavegacionSkeleton'
import { OutletSkeleton } from '../components/OutletSkeleton'
import useUser from '../hooks/useUser'

export const LayoutPrivado = () => {

  const {verificarLogin,user,setUser,cargando} = useUser();

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
            <div className='bg-color-bg h-screen flex'>
            <Navegacion/>
    
            <div className='w-full h-screen overflow-y-scroll p-10'>
                <Outlet/>
            </div>
          </div>
    ) : <Navigate to={'/'}></Navigate>}

    </>
  )
}
