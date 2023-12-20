import React, { useEffect, useRef, useState } from 'react'
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

  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  const [visibleVideo, setVisibleVideo] = useState(1);
  const [videosLoaded, setVideosLoaded] = useState(false);

  const [enabled, setEnabled] = useState(false)

  const { id } = useParams();

  const { dispositivo, obtenerDispositivo, activarRiegoManual } = useDispositivos();

  const { _id, nombre, numeroDispositivo, planta, estado } = dispositivo

  useEffect(() => {
    obtenerDispositivo(id);
  }, [])

  useEffect(() => {
    if (dispositivo._id) {
      setEnabled(dispositivo.estado);
    }
  }, [dispositivo])

  const [dataSensoresGrafica, setDataSensoresGrafica] = useState([]);
  const [dataSensoresTable, setDataSensoresTable] = useState([]);

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

  useEffect(() => {
    const getUsuario = async () => {
      const response = await fetch(`${import.meta.env.VITE_RUTA_BACKEND}/sensores/getAll/${id}`);
      const data = await response.json();
      setDataSensoresGrafica(data.dataSensoresGraficaMod);
      setDataSensoresTable(data.dataSensoresTableMod);

    }
    getUsuario();

  }, [])

  const handleActivarRiegoManual = async () => {

    const data = await activarRiegoManual({_id:id});
    if(!data.status){
      return toast.error(data.msg)
    }
    toast.success(data.msg)  
    // toast.success("Riego activado")

    setTimeout(() => {
      if (visibleVideo === 1) {
        setVisibleVideo(2);
        video2Ref.current?.play();
        video1Ref.current?.pause();
      } else {
        setVisibleVideo(1);
        video1Ref.current?.play();
        video2Ref.current?.pause();
      }
    }, 4000);

    setTimeout(() => {
      setVisibleVideo(1);
      video1Ref.current?.play();
      video2Ref.current?.pause();
    }, 63000);
  }

  useEffect(() => {
    const loadVideos = async () => {
      try {
        // Cargar ambos videos en paralelo
        await Promise.all([
          video1Ref.current?.play(),
          video1Ref.current?.pause(),
          video2Ref.current?.play(),
          video2Ref.current?.pause(),
        ]);

        setVideosLoaded(true);
      } catch (error) {
        console.error('Error loading videos:', error);
      }
    };

    loadVideos();
  }, []);

  const [horaActual, setHoraActual] = useState(new Date());

  useEffect(() => {
    const actualizarHora = () => {
      setHoraActual(new Date());
    };

    const intervalId = setInterval(actualizarHora, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatoFechaHora = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };


  const fechaHoraTexto = horaActual.toLocaleDateString('es-ES', formatoFechaHora).replace(',', '');


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
                <Toggle enabled={enabled} setEnabled={setEnabled} id={id} />
              </div>
            </div>

            <div className='w-3/12 max-lg:w-4/12 py-3 px-5 rounded-lg bg-white flex gap-5 justify-between items-center'>
              <h2 className='text-xs text-center font-semibold'>Riego Forzado</h2>
              <button onClick={handleActivarRiegoManual} className='text-sm px-5 border-emerald-500 border rounded-lg py-2 bg-emerald-500 text-white duration-300 hover:bg-emerald-600'>Activar</button>
            </div>
          </div>

          <div className={`flex gap-5 ${planta?._id === '6557f6371c63c6b93f684be7' && 'justify-center'}`}>

            <InformacionPlanta planta={planta} id={id} />
            {dispositivo?._id === '65590aab8ef290c452993fb5' && (

              <div className="bg-black rounded-lg mt-5 w-3/5 relative overflow-hidden group">
                <video
                  ref={video1Ref}
                  src={`/b99900a9-f6cd-4066-a3c8-617b2ef539ac/v16d4923e9-69ff-4ab9-9330-1d72b16486ae.webm`}
                  autoPlay
                  loop
                  muted
                  className={`bg-black max-lg:h-[310px] max-xl:h-[314px] max-2xl:h-[388px] w-full object-center object-cover mx-auto rounded-lg group-hover transition-opacity duration-300 ${visibleVideo === 1 ? 'block' : 'hidden'
                    }`}
                ></video>
                <video
                  ref={video2Ref}
                  src={`/b99900a9-f6cd-4066-a3c8-617b2ef539ac/v26fd03c10-0039-4d38-a55f-39ce24816ea0.webm`}
                  autoPlay
                  loop
                  muted
                  className={`bg-black max-lg:h-[310px] max-xl:h-[314px] max-2xl:h-[388px] w-full object-center object-cover mx-auto rounded-lg group-hover transition-opacity duration-300 ${visibleVideo === 2 ? 'block' : 'hidden'
                    }`}
                ></video>
                <div className=" absolute bottom-0 top-0 w-full  opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end">

                  <div className='bg-black/20 flex justify-between items-center w-full px-3 select-none rounded-b-lg'>
                    {/* <div className="h-8 flex items-center justify-start gap-1">
                      <i className="fa-solid fa-fade fa-circle text-red-600 text-[8px]"></i>
                      <p className='uppercase font-extrabold text-[10px] text-white'>live</p>
                    </div> */}
                    <div className='h-8 w-full flex items-center justify-end'>
                      <p className='text-xs text-white/70'>{fechaHoraTexto}</p>
                    </div>
                  </div>
                </div>
              </div>

            )}

          </div>



          <SimpleComposedChart data={dataSensoresGrafica} />
          <ContainerDataTable columns={columns} data={dataSensoresTable} />
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
              <InformacionPlantaDesvinculada id={id} />
            </div>
          </>
        )

      }

    </>
  )
}