import React, { useEffect, useState } from 'react'
import { Toggle } from '../components/Toggle';
import { InformacionPlanta } from '../components/InformacionPlanta';
import { SimpleComposedChart } from '../components/SimpleComposedChart';
import { ContainerDataTable } from '../components/ContainerDataTable';
import { useParams } from 'react-router-dom';
import useDispositivos from '../hooks/useDispositivos';
import { Skeleton } from '../components/Skeleton';
import { InformacionPlantaDesvinculada } from '../components/InformacionPlantaDesvinculada';
import { toast } from 'react-toastify';

export const Dispositivo = () => {

    const [enabled, setEnabled] = useState(false)

    const {id} = useParams();

    const {dispositivo, obtenerDispositivo, activarRiegoManual} = useDispositivos();

    const {_id,nombre,numeroDispositivo,planta,estado} = dispositivo
    
    useEffect(()=>{
      obtenerDispositivo(id);
    },[])

    useEffect(()=>{
      if(dispositivo._id){
        setEnabled(dispositivo.estado);
      }
    },[dispositivo])

    const [dataSensoresGrafica,setDataSensoresGrafica] = useState([]);
    const [dataSensoresTable,setDataSensoresTable] = useState([]);

    const columns = [
        {
            name: '#Num',
            selector: row => row.numeroReporte,
        },
        {
            name: 'Humedad del ambiente',
            selector: row => row.humedadAmbiente,
        },
        {
          name: 'Humedad del suelo',
          selector: row => row.humedadSuelo,
        },
        {
            name: 'Temperatura',
            selector: row => row.temperatura,
        },
        {
          name: 'Fecha',
          selector: row => row.fechaYhora,
      },

    ];

    useEffect(()=>{
      const getUsuario = async () => {
          const response = await fetch(`${import.meta.env.VITE_RUTA_BACKEND}/sensores/getAll/${id}`);
          const data = await response.json();
          setDataSensoresGrafica(data.dataSensoresGraficaMod);
          setDataSensoresTable(data.dataSensoresTableMod);

      }
      getUsuario();

  },[])

  const handleActivarRiegoManual = async () => {
    const data = await activarRiegoManual({_id:id});
    data.status ? toast.success(data.msg) : toast.error(data.msg)
  }

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
              <button onClick={handleActivarRiegoManual} className='text-sm px-5 border-emerald-500 border rounded-lg py-2 bg-emerald-500 text-white duration-300 hover:bg-emerald-600'>Activar</button>
            </div>
          </div>
          
            <div className={`flex gap-5 ${planta?._id === '6557f6371c63c6b93f684be7' && 'justify-center'}`}>
              
              <InformacionPlanta planta={planta} id={id}/>
              {dispositivo?._id === '65590aab8ef290c452993fb5' && (
               
                  <div className='mt-5 bg-black rounded-lg flex items-center justify-center w-full'>
                     <a target='_blank' href="https://streaming-video-vivero.onrender.com/b1b1c67f-c6b3-40ba-a652-ae0e5c25ce2e7e4633ea-46e5-4f45-8c4f-52e243b79e52">
                    <i className="fa-solid fa-play text-white text-4xl cursor-pointer"></i>
                    </a>
                  </div>
                
              )}
              
            </div>
          
          <SimpleComposedChart data={dataSensoresGrafica}/>
          <ContainerDataTable columns={columns} data={dataSensoresTable}/>
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
            <InformacionPlantaDesvinculada id={id}/>
            </div>
          </>
        )

        }

    </>
  )
}
