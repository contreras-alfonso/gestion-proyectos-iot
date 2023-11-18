import React, { useState } from 'react'
import usePlantas from '../hooks/usePlantas';
import Select from 'react-select';

export const InformacionPlantaDesvinculada = () => {

    const {plantas} = usePlantas();
    const [idPlanta,setIdPlanta] = useState('ww');

    const handleChange = (selectedOption) => {
        setIdPlanta(selectedOption.value);
    }

    const opciones = plantas.map((planta) => ({
        value: planta._id,
        label: (
          <div className='w-full flex gap-5 items-center'>
            <img className='w-4' src={`${import.meta.env.VITE_RUTA_BACKEND}${planta.pathIcono}`} alt="imagen" />
            {planta.nombre}
          </div>
        ),
      }));

  return (
    <>
        <div className='w-fit bg-white p-5 mt-5 rounded-lg flex flex-col gap-5'>
            <h1 className='font-semibold max-lg:text-sm text-center'>Información de la planta</h1>
            <div className='flex gap-10 items-center'>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm font-semibold'>Nombre: <span className='font-normal'>No disponible</span></p>
                    <p className='text-sm font-semibold'>Especie: <span className='font-normal'>No disponible</span></p>
                    <p className='text-sm font-semibold'>Humedad: <span className='font-normal'>No disponible</span></p>
                    <p className='text-sm font-semibold'>Temperatura: <span className='font-normal'>No disponible</span></p>
                    <p className='text-sm font-semibold'>Suelo: <span className='font-normal'>No disponible</span></p>
                    <div className='flex items-center gap-2'>
                        <p className='text-sm font-semibold'>Planta:</p>
                        <Select
                            className='rounded-lg py-2 w-full'
                            value={opciones.find((opcion) => opcion.value === idPlanta)}
                            onChange={handleChange}
                            options={opciones}
                            isSearchable={false}
                        />
                    </div>
                </div>
                <img className='w-16' src={`https://img2.freepng.es/20180326/jyq/kisspng-computer-icons-clip-art-cross-5ab8913181c8f7.1853602815220452335316.jpg`} alt="planta img" />
            </div>
            <button className='text-sm border-emerald-500 border rounded-lg py-2 bg-emerald-500 text-white duration-300 hover:bg-emerald-600'>Vincular</button>
        </div>
    </>
  )
}
