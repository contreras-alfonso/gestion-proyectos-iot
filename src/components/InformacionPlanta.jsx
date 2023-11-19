import React from 'react'
import useDispositivos from '../hooks/useDispositivos'
import { useNavigate } from 'react-router-dom';

export const InformacionPlanta = ({planta,id}) => {
  // const {especie,temperatura,humedad,descripcion,pathIcono} = planta;
  const navigate = useNavigate();
  const {desvincularDispositivo} = useDispositivos();
  const handleSubmit = async () => {
    const data = await desvincularDispositivo({id})
    if(data.status){
      console.log(data.msg)
      navigate('/administration/sistemas');
      window.location.reload();
    }else{
      console.log(data.msg)
    }
  }
  return (
    <div className='w-96 bg-white p-5 mt-5 rounded-lg flex flex-col gap-5'>
        <h1 className='font-semibold max-lg:text-sm text-center'>Información de la planta</h1>
        <div className='flex gap-10 items-center'>
            <div className='flex flex-col gap-2'>
                <p className='text-sm font-semibold'>Nombre: <span className='font-normal'>{planta?.nombre}</span></p>
                <p className='text-sm font-semibold'>Especie: <span className='font-normal'>{planta?.especie}</span></p>
                <p className='text-sm font-semibold'>Humedad: <span className='font-normal'>{planta?.humedad}</span></p>
                <p className='text-sm font-semibold'>Temperatura: <span className='font-normal'>{planta?.temperatura}</span></p>
                <p className='text-sm font-semibold'>Suelo: <span className='font-normal'>{planta?.humedad}</span></p>
            </div>
            <img className='w-16' src={`${import.meta.env.VITE_RUTA_BACKEND}/${planta?.pathIcono}`} alt="" />
        </div>
        <button onClick={handleSubmit} className='text-sm border-emerald-500 border rounded-lg py-2 bg-emerald-500 text-white duration-300 hover:bg-emerald-600'>Desvincular</button>
    </div>
  )
}
