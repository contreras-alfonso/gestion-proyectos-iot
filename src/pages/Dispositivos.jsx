import React, { useEffect, useState } from 'react'
import { TabDispositivos } from '../components/TabDispositivos'
import { Toggle } from '../components/Toggle';
import { SimpleComposedChart } from '../components/SimpleComposedChart';
import { ContainerDataTable } from '../components/ContainerDataTable';
import { InformacionPlanta } from '../components/InformacionPlanta';

export const Dispositivos = () => {


  const [enabled, setEnabled] = useState(false)

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
        <h1 className='text-xl uppercase font-black mb-5'>Dispositivos</h1>
        <div>
          <div className='flex gap-5'>
            <div className="w-9/12 max-lg:w-8/12 py-3 px-5 rounded-lg bg-white flex justify-between items-center">
              <h1 className='font-medium text-sm uppercase '><i className="fa-regular fa-microchip"></i> Dispositivo 001</h1>
                <div className='flex items-center gap-5'>
                  <h2 className='text-xs font-semibold'>Encender/Apagar</h2>
                  <Toggle enabled={enabled} setEnabled={setEnabled}/>
                </div>
            </div>

            <div className='w-3/12 max-lg:w-4/12 py-3 px-5 rounded-lg bg-white flex gap-5 justify-between items-center'>
              <h2 className='text-xs text-center font-semibold'>Riego manual</h2>
              <Toggle enabled={enabled} setEnabled={setEnabled}/>
            </div>
          </div>
          <div className=''>
            <InformacionPlanta/>
            <SimpleComposedChart/>
          </div>
          <ContainerDataTable columns={columns} data={users}/>
        </div>
    </>
  )
}
