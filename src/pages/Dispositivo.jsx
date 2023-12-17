import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Toggle } from '../components/Toggle';
import { InformacionPlanta } from '../components/InformacionPlanta';
import { SimpleComposedChart } from '../components/SimpleComposedChart';
import { ContainerDataTable } from '../components/ContainerDataTable';
import { useParams } from 'react-router-dom';
import useDispositivos from '../hooks/useDispositivos';
import { InformacionPlantaDesvinculada } from '../components/InformacionPlantaDesvinculada';
import { toast } from 'react-toastify';

export const Dispositivo = () => {
  const [pathVideo, setPathVideo] = useState(`${import.meta.env.VITE_RUTA_BACKEND}/4a39af0e-5a94-4b46-bc7e-ef8f92608cc7/c1.webm`);
  const [socketInstance, setSocketInstance] = useState(null);
  const [enabled, setEnabled] = useState(false)

  const { id } = useParams();
  const { dispositivo, obtenerDispositivo, activarRiegoManual } = useDispositivos();
  const { numeroDispositivo, planta, estado } = dispositivo;

  

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



  const handleActivarRiegoManual = async () => {
    toast.success("Riego activado");

    // Emitir evento al servidor para activar el riego
    if (socketInstance) {
      socketInstance.emit('activarRiego');
    }

    if (pathVideo === `${import.meta.env.VITE_RUTA_BACKEND}/4a39af0e-5a94-4b46-bc7e-ef8f92608cc7/c1.webm`) {
      setPathVideo(`${import.meta.env.VITE_RUTA_BACKEND}/4a39af0e-5a94-4b46-bc7e-ef8f92608cc7/c2.webm`);
    } else {
      setPathVideo(`${import.meta.env.VITE_RUTA_BACKEND}/4a39af0e-5a94-4b46-bc7e-ef8f92608cc7/c1.webm`);
    }
  }

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

  useEffect(() => {
  
    const socket = io('http://localhost:3000');
    setSocketInstance(socket);
  
    // Manejar eventos desde el servidor
    socket.on('cambiarVideo', () => {
      // Cambiar al primer video
      if (pathVideo === `${import.meta.env.VITE_RUTA_BACKEND}/4a39af0e-5a94-4b46-bc7e-ef8f92608cc7/c1.webm`) {
        setPathVideo(`${import.meta.env.VITE_RUTA_BACKEND}/4a39af0e-5a94-4b46-bc7e-ef8f92608cc7/c2.webm`);
      } else {
        setPathVideo(`${import.meta.env.VITE_RUTA_BACKEND}/4a39af0e-5a94-4b46-bc7e-ef8f92608cc7/c1.webm`);
      }
    });
  
    // Manejar eventos de conexión y desconexión
    socket.on('connect', () => {
      console.log('Conexión establecida con éxito:', socket.id);
    });
  
    socket.on('disconnect', () => {
      console.log('Desconectado del servidor de Socket.io');
    });
  
    return () => {
      // Desconectar el socket al desmontar el componente
      socket.disconnect();
    };
  }, [id]);
  // Obtener datos iniciales
  useEffect(() => {
    obtenerDispositivo(id);
    
    const getUsuario = async () => {
      const response = await fetch(`${import.meta.env.VITE_RUTA_BACKEND}/sensores/getAll/${id}`);
      const data = await response.json();
      setDataSensoresGrafica(data.dataSensoresGraficaMod);
      setDataSensoresTable(data.dataSensoresTableMod);
    };

    getUsuario();
  }, [id, obtenerDispositivo]);

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
                  src={pathVideo}
                  autoPlay
                  loop
                  muted
                  className={`bg-black max-lg:h-[310px] max-xl:h-[314px] max-2xl:h-[388px] w-full object-center object-cover mx-auto rounded-lg group-hover transition-opacity duration-300`}
                ></video>
                <div className=" absolute bottom-0 top-0 w-full  opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end">

                  <div className='bg-black/20 flex justify-between items-center w-full px-3 select-none rounded-b-lg'>
                    <div className="h-8 flex items-center justify-start gap-1">
                      <i className="fa-solid fa-fade fa-circle text-red-600 text-[8px]"></i>
                      <p className='uppercase font-extrabold text-[10px] text-white'>live</p>
                    </div>
                    <div>
                      <p className='text-xs text-white'>{fechaHoraTexto}</p>
                    </div>
                  </div>
                </div>
              </div>

            )}

          </div>

          <SimpleComposedChart data={dataSensoresGrafica} />
          {/* <ContainerDataTable columns={columns} data={dataSensoresTable} /> */}
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
  );
};
