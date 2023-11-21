import React from 'react'

export const CardInfoDispositivo = ({dispositivo}) => { 
  const {_id,numeroDispositivo,planta} = dispositivo;
  return (
    <a href={`/administration/sistema/${_id}`}>
        <div className='flex flex-col gap-3 items-center justify-center rounded-lg py-6 px-6 duration-300 hover:cursor-pointer hover:shadow bg-white w-60 text-center'>
            <div className='flex items-center justify-center'>
                <img className='h-32' src={`${planta._id==='6557f6371c63c6b93f684be7' ? 'https://img2.freepng.es/20180326/jyq/kisspng-computer-icons-clip-art-cross-5ab8913181c8f7.1853602815220452335316.jpg' : 'https://cdn-icons-png.flaticon.com/512/2286/2286758.png'}`} alt="" />
            </div>
            <h2 className='font-medium text-[15px]'>Sistema 00{numeroDispositivo}</h2>
        </div>
    </a>
  )
}
