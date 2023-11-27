import React, { useState } from 'react'
import { ModalAGregarPlanta } from '../components/ModalAgregarPlanta';
import { CardInfoPlanta } from '../components/CardInfoPlanta';
import usePlantas from '../hooks/usePlantas';
import { Skeleton } from '../components/Skeleton';
import { ModalEditarPlanta } from '../components/ModalEditarPlanta';


export const Plantas = () => {
    const {plantas,planta,setPlanta,imagenesPlantas,modalAgregarPlanta,setModalAgregarPlanta,modalEditarPlanta,setModalEditarPlanta,agregarPlanta,editarPlanta,agregarPlantaState,editarPlantaState} = usePlantas(); 
  return (
    <>
        <div className='flex justify-between '>
            <h1 className='text-xl uppercase font-black'>Plantas</h1>
            <button onClick={()=>{setModalAgregarPlanta(true)}} className='py-3 px-10 rounded-lg shadow text-[13px] flex items-center justify-center gap-2 bg-emerald-500 text-white hover:bg-emerald-600 duration-300'>
                <span>Nueva Planta</span>
                <i className="fa-regular fa-seedling"></i>
            </button>
        </div>

        <div className='mt-5 flex flex-wrap justify-center items-center gap-5'>
            {plantas.length ? 
            plantas.map(p=>
                {return (p._id !== '6557f6371c63c6b93f684be7' && (
                    <div onClick={()=>{setPlanta(p); setModalEditarPlanta(true)}} key={p._id}>
                        <CardInfoPlanta planta={p} setPlanta={setPlanta}/>
                    </div>
                ))}
            ) : 
                <Skeleton/>
            }
        </div>


        {modalAgregarPlanta && <ModalAGregarPlanta modalAgregarPlanta={modalAgregarPlanta} setModalAgregarPlanta={setModalAgregarPlanta} imagenesPlantas={imagenesPlantas} agregarPlanta={agregarPlanta} agregarPlantaState={agregarPlantaState}/>}

        {modalEditarPlanta && <ModalEditarPlanta planta={planta} modalEditarPlanta={modalEditarPlanta} setModalEditarPlanta={setModalEditarPlanta} imagenesPlantas={imagenesPlantas} editarPlanta={editarPlanta} editarPlantaState={editarPlantaState}/>}
        
    </>

  )
}
