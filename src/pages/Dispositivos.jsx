import React, { useEffect, useState } from 'react'
import { TabDispositivos } from '../components/TabDispositivos'
import { Toggle } from '../components/Toggle';
import { SimpleComposedChart } from '../components/SimpleComposedChart';
import { ContainerDataTable } from '../components/ContainerDataTable';
import { InformacionPlanta } from '../components/InformacionPlanta';
import { CardInfoDispositivo } from '../components/CardInfoDispositivo';
import useDispositivos from '../hooks/useDispositivos';
import { Skeleton } from '../components/Skeleton';

export const Dispositivos = () => {

  const {dispositivos} = useDispositivos();

  return (
    <>
        <h1 className='text-xl uppercase font-black mb-5'>Sistemas</h1>
        <div className='mt-5 flex flex-wrap justify-center items-center gap-5'>
          {dispositivos.length ? dispositivos.map(e=>(
            <CardInfoDispositivo key={e._id} dispositivo={e}/>
          )) : <Skeleton/> }
        </div>
    </>
  )
}
