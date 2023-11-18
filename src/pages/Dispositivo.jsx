import React, { useEffect, useState } from 'react'
import { Toggle } from '../components/Toggle';
import { InformacionPlanta } from '../components/InformacionPlanta';
import { SimpleComposedChart } from '../components/SimpleComposedChart';
import { ContainerDataTable } from '../components/ContainerDataTable';
import { useParams } from 'react-router-dom';
import useDispositivos from '../hooks/useDispositivos';
import { Skeleton } from '../components/Skeleton';
import { InformacionPlantaDesvinculada } from '../components/InformacionPlantaDesvinculada';
import usePlantas from '../hooks/usePlantas';

export const Dispositivo = () => {

    const [enabled, setEnabled] = useState(false)

    const {id} = useParams();

    const {dispositivo, obtenerDispositivo} = useDispositivos();

    const {_id,nombre,numeroDispositivo,planta,estado} = dispositivo
    
    useEffect(()=>{
      obtenerDispositivo(id);
    },[])

    useEffect(()=>{
      if(dispositivo._id){
        setEnabled(dispositivo.estado);
      }
    },[dispositivo])

    const [users,setUsers] = useState([]);

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
        },
        {
            name: 'Name',
            selector: row => row.title,
        },
        {
            name: 'Username',
            selector: row => row.title,
        },

    ];

    useEffect(()=>{
      const getUsuario = async () => {
      
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          const data = await response.json();
          setUsers(data);

      }
      getUsuario();

  },[])

  return (
    <>
        <h1 className='text-xl uppercase font-black mb-5'>Sistema</h1>
        {planta?._id !== '6557f6371c63c6b93f684be7' ? (
        <div>
          <div className='flex gap-5'>
            <div className="w-9/12 max-lg:w-8/12 py-3 px-5 rounded-lg bg-white flex justify-between items-center">
              <h1 className='font-medium text-sm uppercase '><i className="fa-regular fa-microchip"></i> Sistema 00{numeroDispositivo}</h1>
                <div className='flex items-center gap-5'>
                  <h2 className='text-xs font-semibold'>Apagar/Encender</h2>
                  <Toggle enabled={enabled} setEnabled={setEnabled} id={id}/>
                </div>
            </div>

            <div className='w-3/12 max-lg:w-4/12 py-3 px-5 rounded-lg bg-white flex gap-5 justify-between items-center'>
              <h2 className='text-xs text-center font-semibold'>Riego manual</h2>
              <button className='text-sm px-5 border-emerald-500 border rounded-lg py-2 bg-emerald-500 text-white duration-300 hover:bg-emerald-600'>Activar</button>
            </div>
          </div>
          <div className=''>
            <InformacionPlanta planta={planta} id={id}/>
            <SimpleComposedChart/>
          </div>
          <ContainerDataTable columns={columns} data={users}/>
        </div>
        ) :
        
        (
          <>
            <div className="w-full py-5 px-5 rounded-lg bg-white flex justify-between items-center">
              <h1 className='font-medium text-sm uppercase '><i className="fa-regular fa-microchip"></i> Sistema 00{numeroDispositivo}</h1>
                <div className='flex items-center gap-5'>
                </div>
            </div>

            <h2 className='font-black text-3xl text-gray-300 text-center mt-10 mb-5'>Primero vincula el sistema a una planta, para visualizar los datos.</h2>
            <div className='flex items-center justify-between gap-5'>
            <InformacionPlantaDesvinculada planta={planta} id={id}/>
            </div>
          </>
        )

        }

    </>
  )
}
