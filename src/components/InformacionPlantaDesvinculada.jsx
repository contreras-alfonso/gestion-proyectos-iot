import React, { useState } from 'react'
import usePlantas from '../hooks/usePlantas';
import Select from 'react-select';
import useDispositivos from '../hooks/useDispositivos';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const InformacionPlantaDesvinculada = ({id}) => {

    const {plantas} = usePlantas();
    const {asignarPlantaDispositivo} = useDispositivos();
    const [idPlanta,setIdPlanta] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if(!idPlanta){
            //TODO : falta msg
            toast.error('Seleccione primero una planta.');
            return;
        }
        const data = await asignarPlantaDispositivo({idPlanta,idDispositivo:id});
        if(data.status){
            console.log(data.msg);
            navigate('/administration/sistema/'+id);
            window.location.reload();

        }else{
            console.log(data.msg);
        }
    }

    const handleChange = (selectedOption) => {
        setIdPlanta(selectedOption.value);
    }

    const opciones = plantas.map((planta) => {
        if(planta._id !== '6557f6371c63c6b93f684be7'){
            return {

                value: planta._id,
                label: (
                    <div className='w-full flex gap-5 items-center'>
                        <img className='w-4' src={`${import.meta.env.VITE_RUTA_BACKEND}/${planta.pathIcono}`} alt="imagen" />
                        {planta.nombre}
                    </div>
                ),
            
            }  
        }
        return null;
    }).filter(Boolean);

  return (
    <>
        <div className='w-96 bg-white p-5 mt-5 rounded-lg flex flex-col gap-5'>
            <h1 className='font-semibold max-lg:text-sm text-center'>Información de la planta</h1>
            <div className='flex gap-10 items-center'>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm font-semibold'>Nombre: <span className='font-normal'>No disponible</span></p>
                    <p className='text-sm font-semibold'>Especie: <span className='font-normal'>No disponible</span></p>
                    <p className='text-sm font-semibold'>Humedad: <span className='font-normal'>No disponible</span></p>
                    <p className='text-sm font-semibold'>Temperatura: <span className='font-normal'>No disponible</span></p>
                    <p className='text-sm font-semibold'>Suelo: <span className='font-normal'>No disponible</span></p>

                </div>
                <img className='w-16' src={`https://www.pngitem.com/pimgs/m/9-93242_no-entry-sign-transparent-png-download-block-icon.png`} alt="planta img" />
            </div>
            <div className=''>
                        <Select
                            className='rounded-lg py-2 w-full'
                            value={opciones.find((opcion) => opcion.value === idPlanta)}
                            onChange={handleChange}
                            options={opciones}
                            isSearchable={false}
                        />
            </div>
            <button onClick={handleSubmit} className='text-sm border-emerald-500 border rounded-lg py-2 bg-emerald-500 text-white duration-300 hover:bg-emerald-600'>Vincular</button>
        </div>
    </>
  )
}
