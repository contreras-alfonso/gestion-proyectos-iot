import React, { useState } from 'react'
import { ModalAGregarPlanta } from '../components/ModalAgregarPlanta';
import { CardInfoPlanta } from '../components/CardInfoPlanta';
import usePlantas from '../hooks/usePlantas';


export const Plantas = () => {
    const [modalAgregarPlanta,setModalAgregarPlanta] = useState(false);
    const {plantas,planta} = usePlantas();

  return (
    <>
        <div className='flex justify-between items-center'>
            <h1 className='text-xl uppercase font-black mb-5'>Plantas</h1>
            <button onClick={()=>{setModalAgregarPlanta(!modalAgregarPlanta)}} className='bg-emerald-500 py-3 px-5 rounded-full text-sm text-white flex items-center justify-center gap-2'>
                <span>Agregar Planta</span>
                <i className="fa-regular fa-seedling"></i>
            </button>
        </div>

        <div className='mt-5 flex gap-5'>
            <CardInfoPlanta/>
        </div>


        {modalAgregarPlanta && <ModalAGregarPlanta/>}
        
    </>

  )
}
