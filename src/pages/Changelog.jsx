import React from 'react'
import { useState } from 'react'
import { SimpleBarChart } from '../components/SimpleBarChart'

export const Changelog = () => {

  const [ruta,setRuta] = useState('sinmouse.mp4');
  
  const handleVideo = () => {
    if(ruta == 'sinmouse.mp4'){
        setRuta('conmouse.mp4')
    }else{
      setRuta('sinmouse.mp4')
    }
  }

  return (
    <div className='p-10'>
        <button onClick={handleVideo} className='bg-slate-500 text-white rounded-lg py-3 px-3 hover:bg-slate-700'>Activar video mouse</button>
        <video src={`/videos/${ruta}`} autoPlay  loop></video>
    </div>
  )
}
