import React, { useState } from 'react'
import { ModalAGregarPlanta } from '../components/ModalAgregarPlanta';
import { CardInfoPlanta } from '../components/CardInfoPlanta';
import usePlantas from '../hooks/usePlantas';
import { Skeleton } from '../components/Skeleton';


export const Plantas = () => {
    const {plantas,planta,imagenesPlantas,modalAgregarPlanta,setModalAgregarPlanta, agregarPlanta,agregarPlantaState} = usePlantas();
  return (
    <>
        <div className='flex justify-between '>
            <h1 className='text-xl uppercase font-black'>Plantas</h1>
            <button onClick={()=>{setModalAgregarPlanta(true)}} className='py-3 px-10 rounded-lg shadow text-[13px]  flex items-center justify-center gap-2 bg-emerald-500 text-white hover:bg-emerald-600 duration-300 uppercase'>
                <span>Nueva Planta</span>
                <i className="fa-regular fa-seedling"></i>
            </button>
        </div>

        <div className='mt-5 flex flex-wrap justify-center items-center gap-5'>
            {plantas.length ? 
            plantas.map(p=>
                <CardInfoPlanta key={p._id} planta={p}/>
            ) : 
                <Skeleton/>
            }
        </div>


        {modalAgregarPlanta && <ModalAGregarPlanta modalAgregarPlanta={modalAgregarPlanta} setModalAgregarPlanta={setModalAgregarPlanta} imagenesPlantas={imagenesPlantas} agregarPlanta={agregarPlanta} agregarPlantaState={agregarPlantaState}/>}
        
    </>

  )
}
